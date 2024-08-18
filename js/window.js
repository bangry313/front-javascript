console.log(window);

// window 생략 가능
// const string = new String("1111111");
// const string = new window.String("1111111");
// window.console.log("헐......");

// 대표적인 프로퍼티
console.log(innerWidth);
console.log(innerHeight);

// 대표적인 메서드(전역 함수)
// open();
// close();

// alert("JavaScript 쉬어요!!!");
// const result = confirm("밥 먹었어요?");
// console.log(result);

// const age = prompt("너 몇살이야", 10);
// console.log(typeof age, age);

// const input = prompt("단을 입력하세요", 2);
// printGugudan(parseInt(input));

// open("hello.html", "pop");
// const pop = open("https://www.daum.net", "pop");
// console.log(pop);
// if(!pop){
//     alert("팝업 차단 해제해 주숑~~^^");
// }
// pop.close();

// SweetAlert 라이브러리 사용하기 
Swal.fire({
    title: "Do you want to save the changes?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Save",
    denyButtonText: `Don't save`
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("Saved!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });








