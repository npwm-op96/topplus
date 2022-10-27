const  REGISTER_FIN = () => {
    console.debug('REGISTER_FIN')
    // localStorage.setItem("mytime", 'FNG21-17089');
    // setCookie('ppkcookie','testcookie',7);
    document.cookie = "user=FNG21-17089;"
    // document.cookie
    let x = document.cookie;
    console.debug('cookie',x)
    window.location.href = 'https://www.fininsurance.co.th/register?uid=FNG21-17089#'
    // window.location.href('https://www.fininsurance.co.th/register?uid=FNG21-17089#')
  };
  

  export { REGISTER_FIN };



  