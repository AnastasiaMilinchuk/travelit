<%@ page contentType="text/html; charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>

<html>
<head>
    <style>
        #map-canvas {
            width: 500px;
            height: 400px;
            background-color: #CCC;
        }
    </style>
    <script src="https://maps.googleapis.com/maps/api/js"></script>
    <script>
        function initialize() {
            var mapCanvas = document.getElementById('map-canvas');
            var mapOptions = {
                center: new google.maps.LatLng(44.5403, -78.5463),
                zoom: 8,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            var map = new google.maps.Map(mapCanvas, mapOptions)
        }
        google.maps.event.addDomListener(window, 'load', initialize);
    </script>
    <title></title>
</head>
<body>
    <section>
        <sec:authorize access="isAuthenticated()">
            <jsp:include page="templates/upperMenuTempl.jsp"  />
            <div class="selected-places">
                <h1>My selected places</h1>
            </div>

            <div class="added-places">
                <h1>My added places</h1>
            </div>

            <div class="add-own-place">
                <form action="<c:url value="/places"/>" method="post">
                    <h1>Add my own place</h1>
                    <div class="add-own-place-container">
                        <div class="photo">
                        </div>
                        <div class="description">
                            <input id="name" name="placeArticle"/>
                            <input id="description" name="placeDescription"/>
                            <input id="address" name="placeAddress" />
                            <div id="map-canvas" class="map">
                            </div>

                            <label>Tags</label>
                            <input id="tags"/>
                         </div>
                    </div>
                    <button type="submit">Save</button>
                </form>
            </div>
        </sec:authorize>




        <sec:authorize access="!isAuthenticated()">
            <%
                // Redirecting to login page
                response.setStatus(response.SC_MOVED_TEMPORARILY);
                response.setHeader("Location", "/travelit/login");
            %>
        </sec:authorize>
    </section>

</body>
</html>
