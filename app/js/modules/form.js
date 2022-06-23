export const form = () => {
  const forms = document.querySelectorAll('.form')

  forms.forEach(form => {

    const formElems = form.querySelector('.form__elems')
    const inputBox = form.querySelector('.form__label')
    const input = form.querySelector('.form__input')
    const status = form.querySelector('.status')

    const resetInput = () => {
      inputBox.classList.remove('opacityHigh', 'done')
      input.style.opacity = ''
    }

    form.addEventListener('submit', e => {
      e.preventDefault()
      if (input.value.length === 16) {

        formElems.style.display = 'none'
        status.classList.add('sending')

        const formData = new FormData(form);

        const postData = async (url, data) => {
          let result = await fetch(url, {
            method: 'POST',
            body: data
          })

          return await result.text(); //json() — если сервер возвращает json данные
        }

        postData('server.php', formData)
          .then(res => {
            console.log(res);
            status.classList.remove('sending')
            status.classList.add('ok')
          })
          // если что-то пошло не так
          .catch(() => {
            status.classList.remove('sending')
            status.classList.add('error')
          })
          // выполняется в любом случае
          .finally(() => {
            setTimeout(() => {
              form.reset()
              resetInput()
              status.classList.remove('sending', 'ok', 'error')
              formElems.style.display = ''
            }, 3000)
          })
      } else {
        if (!input.hasAttribute('disabled')) {
          alert('Введите ваш номер!')
        }
      }
    })


  })




}