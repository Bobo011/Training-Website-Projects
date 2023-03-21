 //using 'as' we can rename an imported variable or function
 //in this case 'me' is written this way cause it is not a default export, anything else must be written between {   }
 import me,{sally,rich as poor, printObj as printedObject} from './script2.mjs';
 console.log(me);
 console.log(sally);
 console.log(poor);
 console.log(printedObject(me));

