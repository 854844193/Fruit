// 取倒计时（天时分秒）
function getDjs(flagTime) {
  // 计算目标与现在时间差（毫秒）
  let time1 = new Date(flagTime).getTime();
  let time2 = new Date().getTime();
  let mss = time1 - time2;

  // 将时间差（毫秒）格式为：天时分秒
  // let days = parseInt(mss / (1000 * 60 * 60 * 24));
  // let hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let hours = parseInt(mss / (1000 * 60 * 60));
  let minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = parseInt((mss % (1000 * 60)) / 1000);

  // console.log(hours, minutes, seconds)
  // return days + "天" + hours + "时" + minutes + "分" + seconds + "秒"
  return {
    // D: days > 9 ? days : '0' + days,
    H: hours > 9 ? hours : '0' + hours,
    M: minutes > 9 ? minutes : '0' + minutes,
    S: seconds > 9 ? seconds : '0' + seconds,
  }
}

module.exports = {
  getDjs: getDjs
}