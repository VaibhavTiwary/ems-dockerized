FROM maven:3.9.4-eclipse-temurin-17 AS build
WORKDIR /build
COPY ems-backend /build
RUN mvn clean package -DskipTests

# ------------ Runtime Stage ------------
FROM openjdk:17
WORKDIR /app
COPY --from=build /build/target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
