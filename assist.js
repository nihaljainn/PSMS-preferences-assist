allStations = $('li.col-sm-12');

count = allStations.length;

function getIndices(query)
{
    res = [];
    for(i=0;i<count;i++)
    {
        station = allStations[i];
        stationName = (station.getElementsByClassName('spanclass'))[0].textContent;
        number = -1
        if(stationName.toLowerCase().includes(query.toLowerCase()))
        {
            number = (station.getElementsByClassName('sortable-number'))[0].textContent;
            res.push(number);
        }
    }
    return res;
}

function updateNumbers()
{
    allStations = $('li.col-sm-12');
    for(i=0;i<count;i++)
    {
        station = allStations[i];
        (station.getElementsByClassName('sortable-number'))[0].textContent = i+1;
    }
}

function swap(x,y)
{
    k = x;
    l = y;
    x = k<l?k:l;
    y = k>l?k:l;
    st1 = allStations[x-1];
    st1.after(allStations[y-1]);
    allStations[y-2].after(st1);
    updateNumbers();
}

function make(x,y)
{
    if(x>y)
    {
        if(y==1)
        {
            make(x,2);
            updateNumbers();
            make(1,2);
        }
        else
        {
            allStations[y-2].after(allStations[x-1]);
            updateNumbers();
        }
    }
    else
    {
        allStations[y-1].after(allStations[x-1]);
        updateNumbers();
    }
}

function batchSwap(src,dest)
{
    len = src.length;
    for(z=0;z<len;z++)
        swap(src[z],dest[z]);
}

function bringToFirst(src)
{
    len = src.length;
    dest = [];
    for(i=0;i<len;i++)
        dest.push(i+1);
    batchSwap(src,dest);
}

function bringToLast(src)
{
    len = src.length;
    dest = [];
    c = count-len+1;
    for(i=0;i<len;i++)
        dest.push(c+i);
    batchSwap(src,dest);
}

/*
For verifying if all rows are unique
c = 0;
for(i=0;i<allStations.length;i++)
{
    for(j=i+1;j<allStations.length;j++)
    {
        sname1 = allStations[i].getElementsByClassName('spanclass')[0].textContent;
        sname2 = allStations[j].getElementsByClassName('spanclass')[0].textContent;
		if(c<4&&i==20)
			console.log(sname1+' '+sname2);
        if(sname1===sname2)
            console.log('lag gayi bhai');
		else
			c++;
    }
}
console.log(c);
*/
