const toCurrency = price => {
    return new Intl.NumberFormat('ru-RU', {
        currency: 'usd',
        style: 'currency'
    }).format(price)
}

const toDate = date => {
    return new Intl.DateTimeFormat('ru-RU', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }).format(new Date(date))
}

document.querySelectorAll('.price').forEach(node => {
    node.textContent = toCurrency(node.textContent)
  })
  
  document.querySelectorAll('.date').forEach(node => {
    node.textContent = toDate(node.textContent)
  })
  

  const $cart = document.querySelector('#cart')
  if ($cart) {
    $cart.addEventListener('click', event => {
      if (event.target.classList.contains('js-remove')) {
        const id = event.target.dataset.id
        const csrf = event.target.dataset.csrf
        fetch('/card/remove/' + id, {
          method: 'delete',
          headers: {
            'X-XSRF-TOKEN': csrf
          },
        }).then(res => res.json())
          .then(card => {
            if (card.petCards.length) {
              const html = card.petCards.map(c => {
                return `
                <tr>
                  <td>${c.title}</td>
                  <td>${c.count}</td>
                  <td>
                    <button class="btn btm-small js-remove" data-csrf="${csrf}" data-id="${c.id}">Delete</button>
                  </td>
                </tr>
                `
              }).join('')
              $cart.querySelector('tbody').innerHTML = html
              $cart.querySelector('.price').textContent = toCurrency(card.price)
                    } else {
                        $cart.innerHTML = '<p>Cart is epmty</p>'
                    }
                })
        }
    })
}

M.Tabs.init(document.querySelectorAll('.tabs'));