function Insertion()
{
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Worst").style.color="red";
    document.getElementById("Time_Average").innerText="Θ(N^2)";
    document.getElementById("Time_Average").style.color="orange";
    document.getElementById("Time_Best").innerText="Ω(N)";
    document.getElementById("Time_Best").style.color="green";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";
    document.getElementById("Space_Worst").style.color="green"

    c_delay=0;
    insertlogic(0,array_size)
    enable_buttons();

}
function insertlogic(start,end)
{

    for(var i=start;i<end;i++)
    {
        div_update(divs[i],div_sizes[i],"yellow");//Color update

        var key= div_sizes[i];
        var j=i-1;
        while(j>=0 && div_sizes[j]>key)
        {
            div_update(divs[j],div_sizes[j],"red");//Color update
            div_update(divs[j+1],div_sizes[j+1],"red");//Color update

            div_sizes[j+1]=div_sizes[j];

            div_update(divs[j],div_sizes[j],"red");//Height update
            div_update(divs[j+1],div_sizes[j+1],"red");//Height update
    
            div_update(divs[j],div_sizes[j],"blue");//Color update
            if(j==(i-1))
            {
                div_update(divs[j+1],div_sizes[j+1],"yellow");//Color update
            }
            else
            {
                div_update(divs[j+1],div_sizes[j+1],"blue");//Color update
            }
            j--;
        }
        div_sizes[j+1]=key;

        for(var t=0;t<i;t++)
        {
            div_update(divs[t],div_sizes[t],"green");//Color update
        }
    }
    div_update(divs[i-1],div_sizes[i-1],"green");//Color update
}