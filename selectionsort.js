function Selectionsort()
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
    selectionsort(0,array_size);
    enable_buttons();
}
function selectionsort(start,end)
{
    for(var i=start;i<end-1;i++)
    {
        div_update(divs[i],div_sizes[i],"red");//Color update

        index_min=i;

        for(var j=i+1;j<array_size;j++)
        {
            div_update(divs[j],div_sizes[j],"yellow");//Color update

            if(div_sizes[j]<div_sizes[index_min])
            {
                if(index_min!=i)
                {
                    div_update(divs[index_min],div_sizes[index_min],"blue");//Color update
                }
                index_min=j;
                div_update(divs[index_min],div_sizes[index_min],"red");//Color update
            }
            else
            {
                div_update(divs[j],div_sizes[j],"blue");//Color update
            }
        }
        
        if(index_min!=i)
        {
            var temp=div_sizes[index_min];
            div_sizes[index_min]=div_sizes[i];
            div_sizes[i]=temp;

            div_update(divs[index_min],div_sizes[index_min],"red");//Height update
            div_update(divs[i],div_sizes[i],"red");//Height update
            div_update(divs[index_min],div_sizes[index_min],"blue");//Color update
        }
        div_update(divs[i],div_sizes[i],"green");//Color update
    }
    div_update(divs[i],div_sizes[i],"green");//Color update
}