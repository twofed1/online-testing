import '../scss/app.scss';

const $ = require('jquery');
require('bootstrap');

let $collectionHolder1, $collectionHolder2;

const $addQuestionButton = $('<button type="button" class="btn btn-success">Add new question</button>');
const $newLinkDiv1 = $('<div></div>').append($addQuestionButton);

jQuery(document).ready(function() {
    $collectionHolder1 = $('#tests_questions');
    $collectionHolder1.append($newLinkDiv1);
    $collectionHolder1.data('index', $collectionHolder1.find(':input').length);
    $addQuestionButton.on('click', function(e) {
        addQuestionsForm($collectionHolder1, $newLinkDiv1);
    });
});

function addQuestionsForm($collectionHolder, $newLinkDiv) {
    let $index = addAction($collectionHolder, $newLinkDiv, false);
    let $addAnswerButton = $('<button type="button" class="btn btn-info" data-id="">Add new answer</button>');
    let $newLinkDiv2 = $('<div></div>').append($addAnswerButton);
    $collectionHolder2 = $("#tests_questions_" + $index + "_answers");
    $addAnswerButton.attr('data-id', $index);
    $addAnswerButton.on('click', function(e) {
        addAnswersForm($index);
    });
    $collectionHolder2.append($newLinkDiv2);
    $collectionHolder2.data('index', $collectionHolder2.find(':input').length);
}

function addAnswersForm($index) {
    let $collectionHolder = $("#tests_questions_" + $index + "_answers");
    let $newLinkDiv = $("[data-id=" + $index + "]");
    addAction($collectionHolder2, $newLinkDiv, true);
}

function addAction($collectionHolder, $newLinkDiv, $check) {
    const prototype = $collectionHolder.data('prototype');
    const index = $collectionHolder.data('index');
    let newForm = prototype;
    if ($check) {
        newForm = newForm.replace(/_answers_\d/g, '_answers_' + index);
        newForm = newForm.replace(/\[answers\]\[\d\]/g, '[answers][' + index + ']');
    } else {
        newForm = newForm.replace(/__name__/g, index);
    }
    $collectionHolder.data('index', index + 1);
    const $newFormDiv = $('<div></div>').append(newForm);
    $newLinkDiv.before($newFormDiv);
    return index;
}