function MyCalender(){

	this.day_number = 42//;

}

/*
* getNowInfo  获取制定年-月-日的具体情况  str  2017-8-9
* getNowsInfo 获取制定年-月-日的具体情况  2017,8,9 拿到的是9月9号的数据
* getMonthDays  获取制定月份的天数
* getYearDays  获取指定年的天数
* getThreeFiveDay  获取 this.day_number 天 大于31
* getDayNumber 凭借this.day_number长度的日期 {before: 4, month_days: 31, after: 7}
*   day_detail 结构 {year:year,month:month,day:day,week:week}
*/

MyCalender.prototype.getNowInfo = function(str){
	
	let date = str?new Date(str):new Date();
	//年
	let year = date.getFullYear();	
	//月
	let month = date.getMonth() + 1;
	//多少号
	let day = date.getDate();
	//星期几
	let week = date.getDay();

	return { "year":year,"month":month,"day":day,"week":week==0?7:week };

}

MyCalender.prototype.getNowsInfo = function(_year,_month,_day){
	
	let date = new Date(_year,_month-1,_day);
	//年
	let year = date.getFullYear();	
	//月
	let month = date.getMonth() + 1;
	//多少号
	let day = date.getDate();
	//星期几
	let week = date.getDay();

	return { "year":year,"month":month,"day":day,"week":week==0?7:week };

}

MyCalender.prototype.getMonthDays = function(day_detail){
	/* Date对象月份从0开始，即0表示1月份，以此类推。
	 *由于JavaScript中day的范围为1~31中的值，所以当设为0时，会向前一天，也即表示上个月的最后一天。
	 */
	let date = new Date(day_detail.year,day_detail.month,0);

	return date.getDate();
}

MyCalender.prototype.getYearDays = function(day_detail){

	let nowYearFirst = new Date(day_detail.year,0,1);

	let nowYearLast = new Date(day_detail.year+1,0,1);

	return (nowYearLast - nowYearFirst)/1000/60/60/24;

}

MyCalender.prototype.getThreeFiveDay = function(day_detail){

	let now_month_days = this.getMonthDays(day_detail);
	
	let now_day_info = this.getNowInfo(String(day_detail.year)+'-'+String(day_detail.month)+'-'+1);

	let not_diff_month = this.day_number - now_month_days;

	let need_before_month = now_day_info.week==7?0:now_day_info.week;

	let after_before_month = this.day_number - need_before_month - now_month_days;

	return {'before':need_before_month,'month_days':now_month_days,'after':after_before_month}

}

MyCalender.prototype.getDayNumber = function(day_detail){

	let need_obj = this.getThreeFiveDay(day_detail);

	let before = need_obj['before'];

	let after = need_obj['after']?need_obj['after'] + need_obj.month_days:0;

	let out_date = [];

	for(let i = before ; i > 0; i--){
		
		let _temp_before = this.getNowsInfo(day_detail['year'],day_detail['month'],-i+1);

		_temp_before.is_now_month = false;

		out_date.push(_temp_before);
	}

	for(let i = 1 ; i <= need_obj.month_days; i++){
		
		let _temp_now = this.getNowsInfo(day_detail['year'],day_detail['month'],i);

		if(_temp_now.day==day_detail.day){
			_temp_now.is_now = true;
		}else{
			_temp_now.is_now = false;
		}

		_temp_now.is_now_month = true;

		out_date.push(_temp_now);
	}

	for(let j = need_obj['month_days'] + 1 ; j <= after; j++){
		
		let _temp_after = this.getNowsInfo(day_detail['year'],day_detail['month'],j);

		_temp_after.is_now_month = false;

		out_date.push(_temp_after);
	}

	return out_date;
	
}