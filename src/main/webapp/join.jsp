<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script type="text/javascript" src="js/joinCheck.js"></script>
<title>회원 가입</title>
</head>
<body>
	<h2>회원 가입</h2>
	<hr>
	<form action="joinOk.jsp" name="joinForm" onsubmit="return joinCheck()">
		아이디 : <input type="text" name="memberId"><br><br>
		비밀번호 : <input type="password" name="memberPw"><br><br>
		이름 : <input type="text" name="memberName"><br><br>
		전화번호 : <input type="text" name="memberPhone"> ※ 숫자만 입력하세요. <br><br>
		<input type="submit" value="회원가입">
		<!-- <input type="submit" value="회원가입" onclick="joinCheck()"> 이거 대신 위 joinCheck.js 확인 -->  
	
	</form>
</body>
</html>