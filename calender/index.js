
let c = new MyCalender();

let dict = {
	0:"日",
	1:"一",
	2:"二",
	3:"三",
	4:"四",
	5:"五",
	6:"六",
}

let d = c.getNowInfo();

render(d);

function render(date){

	currentMonthObj = date;
	let showArray = c.getDayNumber(date);

	var str = "";

	for(var i=0;i<6;i++){
		str += "<tr id="+i+">";
		let tab_color;
		for(var j=0;j<7;j++){
			let tmp = showArray[i*7+j];
			if(!tmp.is_now_month){
				tab_color = "tab_is_not_current_month";
			}else{
				tab_color = "tab_is_current_month";
				if(tmp.is_now){
					tab_color = "tab_is_current_month tab_active";
				}
			}
			str+="<td class='"+tab_color+"'>"+(tmp.month+'-'+tmp.day)+"</td>";
		}
		str+="</tr>";
	}

	let th="";
	for(let i=0;i<7;i++){
		th+="<td>"+dict[i]+"</td/>"
	}

	document.querySelector("table>thead").innerHTML = th;

	document.querySelector(".show_center").innerHTML = date.year+'-'+(date.month>9?date.month:'0'+date.month)

	var table = document.querySelector("table>tbody");
	table.innerHTML = str;
}

function clickBefore(){
	let need_str={};
	let before_month = currentMonthObj.month - 1;
	let before_year = currentMonthObj.year;
	if(before_month<1){
		before_month = 12;
		before_year = currentMonthObj.year - 1;
	}
	need_str = before_year+"/"+before_month;
	let before = c.getNowInfo(need_str);
	render(before);
}

function clickAfter(){
	let need_str={};
	let next_month = currentMonthObj.month + 1;
	let next_year = currentMonthObj.year;
	if(next_month > 12){
		next_month = 1;
		next_year = currentMonthObj.year + 1;
	}
	need_str = next_year+"/"+next_month;
	let next = c.getNowInfo(need_str);
	render(next);
}

function clickToToday(){
	let d = c.getNowInfo();
	render(d);
}

function goAimDate(){
	let year = document.querySelector("#year").value;
	let month = document.querySelector("#month").value;
	if(!year||!month){
		alert("请输入有效时间");
		return false;
	}
	let aim = c.getNowInfo(year+"/"+month);
	render(aim);
}