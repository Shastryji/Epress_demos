function onDone()
{
    console.log("on Done!");
}

setTimeout(onDone,1000);
console.log("set timeout afterwards");

for(let i=0;i<10;i++)
{
    console.log("why I'm running");
}