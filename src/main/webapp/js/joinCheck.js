/**
 * 
 */
/* 원래 주석은 이거 */
function joinCheck() {  // 유효성 check 함수 선언

	var joinForm = document.joinForm  // 변수 선언 var
	
	/* 아이디가 공란으로 입력되었는지 유효성 검사 */
	if (joinForm.memberId.value.length == 0) {
		alert("아이디는 필수 입력사항입니다!\n다시 확인 후 입력해주세요");
		joinForm.memberId.focus();  // 해당 폼 위치로 커서를 이동시킴
		return false;
	}
	/* 아이디가 4자 이상 15자 이하만 가능하도록 유효성 검사 */
	if (joinForm.memberId.value.length < 4 || joinForm.memberId.value.length > 15) {
		alert("아이디는 4자 이상 15자 이하만 가능합니다.!\n다시 확인 후 입력해주세요");
		joinForm.memberId.focus();  // 해당 폼 위치로 커서를 이동시킴
		return false;
	}
	
	if (joinForm.memberPw.value.length == 0) {
		alert("비밀번호는 필수 입력사항입니다!\n다시 확인 후 입력해주세요");
		joinForm.memberPw.focus();  // 해당 폼 위치로 커서를 이동시킴
		return false;
	}
	
	/* 비밀번호는 4자 이상 10자 이하만 가능하도록 유효성 검사 */
	if (joinForm.memberPw.value.length < 4 || joinForm.memberPw.value.length > 10) {
		alert("비밀번호는 4자 이상 10자 이하만 가능합니다.!\n다시 확인 후 입력해주세요");
		joinForm.memberPw.focus();  // 해당 폼 위치로 커서를 이동시킴
		return false;
	}
	
	/* 한글 정규표현식. 이름은 한글만 입력되로록 유효성 검사 */
	var hangul = /^[ㄱ-ㅎ|가-힣]*$/;  // 한글만 가능
	var eng = /^[a-z|A-Z]*$/;  // 영어만 가능
	var number = /^[0-9]*$/;  // 숫자만 가능
	
	if (joinForm.memberName.value.length == 0) {
		alert("이름은 필수 입력사항입니다!\n다시 확인 후 입력해주세요");
		joinForm.memberName.focus();  // 해당 폼 위치로 커서를 이동시킴
		return false;
	}
	
	if (!hangul.test(joinForm.memberName.value)) {
		alert("이름은 한글만 입력 가능합니다!\n다시 확인 후 입력해주세요");
		joinForm.memberName.focus();  // 해당 폼 위치로 커서를 이동시킴
		return false;
	}
	

	if (joinForm.memberPhone.value.length == 0) {
		alert("전화번호는 필수 입력사항입니다!\n다시 확인 후 입력해주세요");
		joinForm.memberPhone.focus();  // 해당 폼 위치로 커서를 이동시킴
		return false;
	}
	
	/* 전화번허는 숫자만 입력가능하도록 유효성 검사 */
	if (!number.test(joinForm.memberPhone.value)) {
		alert("전화번호는 숫자만 입력가능합니다!\n다시 확인 후 입력해주세요");
		joinForm.memberPhone.focus();  // 해당 폼 위치로 커서를 이동시킴
		return false;
	}
	// joinForm.submit(); // <input type="submit" value="회원가입" onclick="joinCheck()"> 일 경우
	return true;  // <form action="joinOk.jsp" name="joinForm" onsubmit="return joinCheck()">  일 경우
}