import * as csvtojson from 'csvtojson';
const csv=`
a,b,c
1,2,3
4,5,6
`;

csvtojson({noheader:true, ignoreEmpty:true})
.fromString(csv)
.on('csv',(csvRow)=>{
  console.log(csvRow);
})