<%
    dim place
    place = Request.form("place")

    Response.write("This is " & place & ".")
    Response.write("It is in this world.")
%>