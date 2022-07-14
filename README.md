# NodeJS와 MongoDB를 이용한 웹 애플리케이션 개발
- 강좌: NodeJS와 MongoDB를 이용한 웹 애플리케이션 개발
- 주최: KITRI
- 강사: 김순곤
- 기간: 2022.07.12 ~ 2022.07.14
---
## Google V8 Javascript Engine
- 오픈소스 JIT 가상 머신 형식의 Javascript Engine
    - JIT: Just In Time, 즉시
    - 가상머신(Virtual Machine)
        - 컴퓨팅 환경을 SW로 구현한 것
        - 컴퓨터 시스템을 에뮬레이션(가상현실화)하는 SW
        - Java의 가상 머신 = JVM
- 자바스크립트를 bytecode로 컴파일하거나 인터프리터(interpret)하는 대신 실행하기 전 직접적인 기계어(x86, ARM 또는 MIPS)로 컴파일하여 성능 향상
    - bytecode
        - 특정 HW가 아닌 가상 컴퓨터에서 돌아가는 실행 프로그램을 위한 이진 표현법.
        - 고급언어로 작성된 소스코드를 가상 머신이 이해할 수 있는 중간 코드로 컴파일한 것
        - 다시 실시간 번역기 또는 저스트 인 타임(just-in-time, JIT) 컴파일러에 의해 바이너리 코드로 변환함.
        - JVM을 위한 바이트 코드를 자바 바이트 코드라고 함.
    - 바이너리 코드 - 컴퓨터가 인식할 수 있는 0,1로 구성된 이진코드
    - 기계어
        - 기계어는 0과 1로 이루어진 바이너리 코드임.
        - CPU 제조사에서 CPU를 만들 때 해당 CPU에서 사용하는 명령어 집합 = '기계어'
        - 그래서 CPU가 변경되면 기계어가 변경.
        - 즉, 같은 명령어지만 다른 0과1의 나열이 될 수 있음.

## Node.js 특징
- Non-Blocking I/O + Asynchrnous
    - I/O 작업 기다림 X / 대기 큐 stay X
    - Single Thread 기반 event 방식의 처리 속도
    - multi-core
- Interperter 언어
    - 컴파일 X -> 코드 바로 실행 가능, 속도 빠름

## REST
- Resource 중심적 설계 중요 -> Resource oriented architecture
    CRUD | HTTP
    ---|:---:
    `Create` | **POST**
    `Read` | **GET** |
    `Update` | **PUT, FETCH**
    `Delete` | **DELETE**

## 실습
1. 인사관리 프로그램 (RESTful API 기반)
- https://github.com/soongon/express-employee

2. 스캐폴딩
- express-generator
    - 익스프레스 스캐폴딩 툴
    - scaffolding
        - 공사장에서 공사를 편하게 하고자 임시적으로 만든 가설물.
        - 어플리케이션을 만들기 편하게 기본적이라고 생각되는 인터페이스를 생성.
    - 실행 - express가 설치 되어 있으므로 실행만 하면 됨
    > npx express-generator node-sns


## 설치
- 모듈
    - npm
        - 설치 - 최초 명령 실행
        > npm install
    - express
        - 설치
        - https://expressjs.com/en/starter/hello-world.html
        > npm i express
    - nodemon
        - node monitor
            - 노드가 실행하는 파일이 속한 디렉터리를 감시하고 있다가 파일이 수정되면 자동으로 노드 애플리케이션을 재시작하는 확장 모듈
            - 재시작 없이 코드를 자동 반영
        - 설치 - 로컬에만 설치
        - -D 옵션: 개발용
        > npm i nodemon -D

        - nodemon 실행
            - npx : local 로 설치된 모듈 실행
        > npx nodemon app.js
    - mongoose
        - node.js에서 mongo db 연결
        - https://mongoosejs.com/docs/index.html
        > npm i mongoose
- Mongo DB
    - https://cloud.mongodb.com/
- 프로그램
    - Mongo DB compass
        - Mongo DB 개발 통합 환경    

## 참조
- Electron
    - Desktop APP 개발 프레임워크
    - VS, Teams 개발