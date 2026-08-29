import {registry} from '../frontend/scripts/modules.js';
import {catalog,solarLesson,solarQuest} from '../frontend/scripts/content.js';
const required=['learnquest','multiple-choice','matching','drag-drop'];
for(const id of required){if(!registry.has(id))throw new Error(`Missing module: ${id}`)}
if(!catalog.grades.some(x=>x.id==='grade_p4'))throw new Error('Missing Grade 4');
if(solarLesson.activityId!==solarQuest.id)throw new Error('Lesson activity reference mismatch');
if(!Array.isArray(solarQuest.stages)||solarQuest.stages.length<5)throw new Error('LearnQuest stages invalid');
for(const stage of solarQuest.stages.filter(x=>x.type==='activity')){if(!registry.has(stage.module))throw new Error(`Unregistered stage module: ${stage.module}`)}
console.log(`OK: ${required.length} modules, ${solarQuest.stages.length} LearnQuest stages`);
