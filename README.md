# Intregarate new microservices(Node.js) with Microservices with Spring Boot - v8 

Thanks to: https://github.com/microservices-practical/microservices-v8

This project contains the version 8 of the application that is developed under the scope of the book *Learn Microservices with Spring Boot*. You can get a copy of the book on [Amazon](http://amzn.to/2FSB2ME) or [Apress](http://www.apress.com/book/9781484231647).

# NEW ARCHITECTURE

![NewArchitecture](https://github.com/chinyyyyyyyy/sa_microservice/blob/master/1621302.png)


# STEP

1 run rabbit-mq
o Start the server using the following command
rabbitmq-server
o Enable the RabbitMQ management plugin using the following command
rabbitmq-plugins enable rabbitmq_management

2 start 5 microservice
o Gamification: 
```
java -jar ./gamification/target/gamification-v8-0.8.0-SNAPSHOT.jar
```
o Gateway: 
```
java -jar ./gateway/target/gateway-v8-0.8.0-SNAPSHOT.jar
```
o service-registry: 
```
java -jar./service-registry/target/service-registry-v8-0.8.0-SNAPSHOT.jar
```
o social-multiplication:
``` 
java -jar./social-multiplication/target/social-multiplication-v8-0.8.0-SNAPSHOT.jar
```

o service_test(Our Microservice): 
```
node ./service_test/test.js
```

Run index.html files in UI via your sever








