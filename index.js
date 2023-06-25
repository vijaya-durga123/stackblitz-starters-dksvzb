// run `node index.js` in the terminal
for(var i=1;i<=100;i++)
{
  if((i%3==0)&&(i%5==0))
  {
      console.log("amazon");
  }
  else if(i%5===0)
  {
     console.log("facebook");
  }
  else if(i%3!=0)
  {
    console.log("google");
  }
  else
  {
    console.log(i);
  }
}
