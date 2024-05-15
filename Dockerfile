# Use the official Maven image to build the application
FROM maven:3.8.5-openjdk-17 AS build

# Set the working directory in the container
WORKDIR /app

# Copy the pom.xml file to download dependencies
COPY pom.xml .

# Copy the source code
COPY src ./src

# Package the application
RUN mvn package

# Use the official OpenJDK image to run the application
FROM openjdk:17-jdk-slim

# Expose the application port
EXPOSE 8080

# Copy the JAR file from the build stage
#COPY --from=build /app/target/your-app-0.0.1-SNAPSHOT.jar app.jar
COPY --from=build /app/target/*.jar app.jar

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
