/**
 * Created by Administrator on 2017/8/1.
 */
function getByClass(name)
{
        var oResult=[];
        var oObj=document.getElementsByTagName('*');
        for(var i=0;i<oObj.length;i++)
        {
            if(oObj[i].className==name)
            {
                oResult.push(oObj[i]);
            }
        }
        return oResult;
}

window.onload=function ()
{
    var o
}
