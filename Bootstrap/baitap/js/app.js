var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'subjects.html',
            controller: 'subjectCtrl'
        })
        .when('/quiz/:id/:name', {
            templateUrl: 'quiz-app.html'
        })
});
app.controller('quizCtrl', function ($scope, $http, $routeParams, quizFactory) {
    // $http.get('../ASM/db/Quizs/' + $routeParams.id + '.js').then(function (reponse) {
    //     //$scope.list_subject = reponse.data;
    //     quizFactory.questions = reponse.data;
    // })
});


app.controller('subjectCtrl', function ($scope, $http) {
    $scope.list_subject = [];
    $http.get('../ASM/db/Subjects.js').then(function (reponse) {
        $scope.list_subject = reponse.data;
    })
});

app.directive('quizfpoly', function (quizFactory) {
    return {
        restrict: 'AE',
        scope: {},
        templateUrl: 'template_quiz.html',
        link: function (scope, elem, attrs) {
            scope.start = function () {
                scope.id = 1;
                scope.quizOver = false;
                scope.inProgess = true;
                scope.getQuestion();
            };
            scope.reset = function () {
                scope.inProgess = false;
                scope.score = 0;
            };
            scope.getQuestion = function () {
                var quiz = quizFactory.getQuestion(scope.id);
                if (quiz) {
                    scope.question = quiz.Text;
                    scope.options = quiz.Answers;
                    scope.answer = quiz.AnswerId;
                    scope.answerMode = true;
                } else {
                    scope.quizOver = true;
                }
            }
            scope.checkAnswer = function () {
                //alert('answer');
                if (!$('input[name = answer]:checked').length) return;
                var ans = $('input[name = answer]:checked').val();
                if (ans == scope.answer) {
                    //alert('dung');
                    scope.score++;
                    scope.correctAns = true;
                } else {
                    //alert('sai');
                    scope.correctAns = false;
                }
                scope.answerMode = false;
            };
            scope.nextQuestion = function () {
                scope.id++;
                scope.getQuestion();
            }
            scope.reset();
        }

    }
});
app.factory('quizFactory', function ($http, $routeParams) {
    $http.get('../ASM/db/Quizs/' + $routeParams.id + '.js').then(function (reponse) {
        questions = reponse.data;
        //alert(questions, length);
    });
    return {
        getQuestion: function (id) {
            var count = questions.length;
            var randomItem = questions[Math.floor(Math.random() * questions.length)];
            if (count > 10) {
                count = 10;
            }

            if (id < count) {
                return randomItem;
            } else {
                return false;
            }

        }
    }
});