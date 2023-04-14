// $(document).on('submit', '#post-form', function (e) {
//     e.preventDefault();

//     $.ajax({
//         type: 'POST',
//         url: '/create',
//         data: {
//             link: $('#link').val(),
//             csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
//         },
//         success: function (data) {
//             $('h2').html("localhost:8000/" + data)
//         }
//     });
// })

// const form = document.getElementById('form');
// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     const prePayload = new FormData(form);
//     const payLoad = URLSearchParams(prePayload);
//     fetch('/create', {
//         method: 'POST',
//         body: payLoad,
//         headers: {
//             'X-CSRFToken': document.getElementsByName('csrfmiddlewaretoken')[0].value
//         }
//     }).then(function (response) {
//         return response.json();
//     }).then(function (data) {
//         document.querySelector('h2').innerHTML = "www.surls.ga/" + data;

//     })
// })