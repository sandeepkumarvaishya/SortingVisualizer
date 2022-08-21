function Merge()
{
    document.getElementById("Time_Worst").innerText="O(NlogN)";
    document.getElementById("Time_Worst").style.color="red";
    document.getElementById("Time_Average").innerText="Θ(NlogN)";
    document.getElementById("Time_Average").style.color="orange";
    document.getElementById("Time_Best").innerText="Ω(1)";
    document.getElementById("Time_Best").style.color="green";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";
    document.getElementById("Space_Worst").style.color="green"

    c_delay=0;
    mergep(0,array_size-1)
    enable_buttons();

}
 function mergesort(start,mid,end)
{
    var p=start,q=mid+1;

    var Arr=[],k=0;

    for(var i=start; i<=end; i++)
    {
        if(p>mid)
        {
            Arr[k++]=div_sizes[q++];
            div_update(divs[q-1],div_sizes[q-1],"red");//Color update
        }
        else if(q>end)
        {
            Arr[k++]=div_sizes[p++];
            div_update(divs[p-1],div_sizes[p-1],"red");//Color update
        }
        else if(div_sizes[p]<div_sizes[q])
        {
            Arr[k++]=div_sizes[p++];
            div_update(divs[p-1],div_sizes[p-1],"red");//Color update
        }
        else
        {
            Arr[k++]=div_sizes[q++];
            div_update(divs[q-1],div_sizes[q-1],"red");//Color update
        }
    }

    for(var t=0;t<k;t++)
    {
        div_sizes[start++]=Arr[t];
        div_update(divs[start-1],div_sizes[start-1],"green");//Color update
    }
}


function mergep(start,end)
{
    if(start<end)
    {
        var mid=Math.floor((start + end) / 2);
        div_update(divs[mid],div_sizes[mid],"yellow");
        mergep(start,mid);
        mergep(mid+1,end);
        mergesort(start,mid,end);


    }
}