<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원 정보 확인</title>
</head>
<body>
	<%
		// 인코딩이 문제가 있을 수가 있어 무조건 해주는게 좋다
		request.setCharacterEncoding("utf-8");  // utf-8 로 입력 받는 값들을 모두 인코딩
	
		String mid = request.getParameter("memberId");
		String mpw = request.getParameter("memberPw");
		String mname = request.getParameter("memberName");
		String mphone = request.getParameter("memberPhone");
	
	%>
	
	<h2>회원정보 확인</h2>
	<hr>
	ID : <%= mid %><br><br>
	PASSWORD : <%= mpw %><br><br>
	NAME : <%= mname %><br><br>
	PHONE : <%= mphone %><br><br>
	
</body>
</html>