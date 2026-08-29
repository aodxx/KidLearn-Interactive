export const registry = new Map();

export function registerModule(def) {
  if (!def?.id || typeof def.mount !== 'function') throw new Error('Invalid module contract');
  registry.set(def.id, def);
}

export function getModule(id) {
  const mod = registry.get(id);
  if (!mod) throw new Error(`Unknown module: ${id}`);
  return mod;
}

registerModule({
  id: 'multiple-choice', version: '1.0.0', supportedModes: ['learn', 'assessment'],
  mount(container, activity, context = {}) {
    let selected = null;
    let done = false;
    container.innerHTML = `<div class="stack"><h2>${activity.title || 'เลือกคำตอบ'}</h2><p>${activity.prompt}</p><div data-choices class="stack"></div><div data-feedback></div><button class="primary" data-check>ตรวจคำตอบ</button></div>`;
    const choices = container.querySelector('[data-choices]');
    activity.choices.forEach((choice, index) => {
      const button = document.createElement('button');
      button.className = 'choice';
      button.textContent = choice;
      button.onclick = () => {
        selected = index;
        choices.querySelectorAll('.choice').forEach(x => x.classList.remove('selected'));
        button.classList.add('selected');
      };
      choices.appendChild(button);
    });
    container.querySelector('[data-check]').onclick = () => {
      if (selected === null) return;
      const correct = selected === activity.correctIndex;
      const feedback = container.querySelector('[data-feedback]');
      if (context.mode === 'learn') {
        feedback.className = `feedback ${correct ? '' : 'hint'}`;
        feedback.textContent = correct ? 'ถูกต้อง! เยี่ยมมาก' : activity.hint || 'ลองอีกครั้ง';
        if (!correct) return;
      }
      done = true;
      context.onComplete?.({ completed: true, score: correct ? activity.points || 1 : 0, maxScore: activity.points || 1 });
    };
    return {
      getResult: () => ({ completed: done, score: done && selected === activity.correctIndex ? activity.points || 1 : 0, maxScore: activity.points || 1 }),
      unmount: () => container.replaceChildren()
    };
  }
});

registerModule({
  id: 'matching', version: '1.0.0', supportedModes: ['learn', 'assessment'],
  mount(container, activity, context = {}) {
    let selectedLeft = null;
    const matches = new Map();
    const rights = [...activity.pairs.map(x => x[1])].sort(() => .5 - Math.random());
    const render = () => {
      container.innerHTML = `<div class="stack"><h2>${activity.title}</h2><p class="muted">แตะด้านซ้าย แล้วเลือกคำอธิบายที่ตรงกัน</p><div class="match-row"><div data-left class="stack"></div><div data-right class="stack"></div></div><button class="primary" data-check>ตรวจการจับคู่</button><div data-feedback></div></div>`;
      activity.pairs.forEach(([left]) => {
        const button = document.createElement('button');
        button.className = `choice ${selectedLeft === left ? 'selected' : ''}`;
        button.textContent = matches.has(left) ? `${left} → ${matches.get(left)}` : left;
        button.onclick = () => { selectedLeft = left; render(); };
        container.querySelector('[data-left]').appendChild(button);
      });
      rights.forEach(right => {
        const button = document.createElement('button');
        button.className = 'choice';
        button.textContent = right;
        button.onclick = () => {
          if (!selectedLeft) return;
          matches.set(selectedLeft, right);
          selectedLeft = null;
          render();
        };
        container.querySelector('[data-right]').appendChild(button);
      });
      container.querySelector('[data-check]').onclick = () => {
        if (matches.size < activity.pairs.length) {
          const feedback = container.querySelector('[data-feedback]');
          feedback.className = 'feedback hint';
          feedback.textContent = 'จับคู่ให้ครบทุกข้อก่อนนะ';
          return;
        }
        const score = activity.pairs.filter(([left, right]) => matches.get(left) === right).length;
        const feedback = container.querySelector('[data-feedback]');
        if (context.mode === 'learn' && score < activity.pairs.length) {
          feedback.className = 'feedback hint';
          feedback.textContent = `ถูก ${score}/${activity.pairs.length} คู่ ลองปรับคู่ที่ยังไม่ถูก`;
          return;
        }
        feedback.className = 'feedback';
        feedback.textContent = context.mode === 'learn' ? 'จับคู่ถูกต้องทั้งหมด!' : 'ทำครบแล้ว';
        context.onComplete?.({ completed: true, score, maxScore: activity.points || activity.pairs.length });
      };
    };
    render();
    return {
      getResult: () => ({ completed: matches.size === activity.pairs.length, score: activity.pairs.filter(([l, r]) => matches.get(l) === r).length, maxScore: activity.points || activity.pairs.length }),
      unmount: () => container.replaceChildren()
    };
  }
});

registerModule({
  id: 'drag-drop', version: '1.0.0', supportedModes: ['learn', 'assessment'],
  mount(container, activity, context = {}) {
    let items = [...activity.items].sort(() => .5 - Math.random());
    const render = () => {
      container.innerHTML = `<div class="stack"><h2>${activity.title}</h2><p class="muted">เรียงจากใกล้ดวงอาทิตย์ไปไกลขึ้น ใช้ปุ่ม ↑ ↓ หรือการลาก</p><div class="drag-list" data-list></div><button class="primary" data-check>ตรวจลำดับ</button><div data-feedback></div></div>`;
      const list = container.querySelector('[data-list]');
      items.forEach((item, index) => {
        const row = document.createElement('div');
        row.className = 'drag-item';
        row.draggable = true;
        row.innerHTML = `<span>${index + 1}. ${item}</span><span><button class="secondary" data-up aria-label="เลื่อน ${item} ขึ้น">↑</button> <button class="secondary" data-down aria-label="เลื่อน ${item} ลง">↓</button></span>`;
        row.querySelector('[data-up]').onclick = () => { if (index > 0) { [items[index - 1], items[index]] = [items[index], items[index - 1]]; render(); } };
        row.querySelector('[data-down]').onclick = () => { if (index < items.length - 1) { [items[index + 1], items[index]] = [items[index], items[index + 1]]; render(); } };
        row.ondragstart = e => e.dataTransfer.setData('text/plain', String(index));
        row.ondragover = e => e.preventDefault();
        row.ondrop = e => {
          e.preventDefault();
          const from = Number(e.dataTransfer.getData('text/plain'));
          const [moved] = items.splice(from, 1);
          items.splice(index, 0, moved);
          render();
        };
        list.appendChild(row);
      });
      container.querySelector('[data-check]').onclick = () => {
        const score = items.reduce((n, x, i) => n + (x === activity.items[i] ? 1 : 0), 0);
        const correct = score === activity.items.length;
        const feedback = container.querySelector('[data-feedback]');
        feedback.className = `feedback ${correct ? '' : 'hint'}`;
        feedback.textContent = correct ? 'เรียงถูกต้องทั้งหมด!' : 'ยังไม่ถูกทั้งหมด ลองจัดลำดับอีกครั้ง';
        if (correct || context.mode === 'assessment') context.onComplete?.({ completed: true, score, maxScore: activity.points || activity.items.length });
      };
    };
    render();
    return {
      getResult: () => ({ completed: true, score: items.reduce((n, x, i) => n + (x === activity.items[i] ? 1 : 0), 0), maxScore: activity.points || activity.items.length }),
      unmount: () => container.replaceChildren()
    };
  }
});

registerModule({
  id: 'learnquest', version: '1.0.0', supportedModes: ['learn'],
  mount(container, quest, context = {}) {
    let index = 0;
    let total = 0;
    let max = 0;
    const next = result => {
      if (result) { total += result.score || 0; max += result.maxScore || 0; }
      index += 1;
      render();
    };
    const render = () => {
      const stage = quest.stages[index];
      if (!stage) {
        container.innerHTML = `<div class="card"><div class="score">${total}/${max}</div><h2 style="text-align:center">ภารกิจสำเร็จ!</h2><p style="text-align:center" class="muted">คุณรู้จักระบบสุริยะมากขึ้นแล้ว</p><div class="actions"><button class="primary" data-home>กลับไปบทเรียน</button></div></div>`;
        container.querySelector('[data-home]').onclick = () => context.onComplete?.({ completed: true, score: total, maxScore: max });
        return;
      }
      const percent = Math.round((index / quest.stages.length) * 100);
      container.innerHTML = `<div class="stack"><div class="crumb">ด่าน ${index + 1}/${quest.stages.length}</div><div class="progress"><span style="width:${percent}%"></span></div><div data-stage></div></div>`;
      const host = container.querySelector('[data-stage]');
      if (stage.type === 'content') {
        host.innerHTML = `<div class="card mission"><span class="pill">สำรวจ</span><h2>${stage.title}</h2><p>${stage.body}</p><button class="primary" data-next>ไปด่านต่อไป</button></div>`;
        host.querySelector('[data-next]').onclick = () => next();
      } else if (stage.type === 'summary') {
        host.innerHTML = `<div class="card"><h2>${stage.title}</h2><p>คุณผ่านกิจกรรมครบแล้ว พร้อมดูผลภารกิจ</p><button class="primary" data-next>ดูผลภารกิจ</button></div>`;
        host.querySelector('[data-next]').onclick = () => next();
      } else {
        getModule(stage.module).mount(host, stage, { mode: 'learn', onComplete: next });
      }
    };
    render();
    return { getResult: () => ({ completed: index >= quest.stages.length, score: total, maxScore: max }), unmount: () => container.replaceChildren() };
  }
});
