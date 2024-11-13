import ReactGA from 'react-ga4'

const Share = ({
  shareUrl,
  shareImage
}: {
  shareUrl: string
  shareImage: string
}) => {
  const handleUrlCopy = () => {
    ReactGA.event({
      category: 'share',
      action: 'url-copy',
      label: 'url-copy'
    })
    navigator.clipboard.writeText(shareUrl)
  }

  const handleKakaoShare = () => {
    ReactGA.event({
      category: 'share',
      action: 'kakao-share',
      label: 'kakao-share'
    })
    // window.Kakao.Share.sendCustom({
    //   templateId: 114181,
    //   templateArgs: {
    //     image: shareImage
    //   }
    // })
    window.Kakao.Share.sendScrap({
      requestUrl: 'https://beta.fitly.fitness/'
    })
  }

  return (
    <div className="flex flex-col items-center justify-center gap-[12px] text-[16px]">
      공유하기
      <div className="flex items-center gap-[12px] text-[10px]">
        <div
          className="flex cursor-pointer flex-col items-center justify-center gap-[6px] rounded-[10px] p-2 hover:bg-gray-100 active:bg-gray-200"
          onClick={handleKakaoShare}
        >
          <svg
            width="35"
            height="32"
            viewBox="0 0 35 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="17.5"
              cy="16"
              rx="17.5"
              ry="16"
              fill="url(#pattern0_4256_12839)"
            />
            <defs>
              <pattern
                id="pattern0_4256_12839"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_4256_12839"
                  transform="translate(-0.580913) scale(0.00425)"
                />
              </pattern>
              <image
                id="image0_4256_12839"
                width="512"
                height="250"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAD6CAIAAABYjGj7AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAACAKADAAQAAAABAAAA+gAAAABEtFxyAAAeA0lEQVR4Ae2dX8gXV3rHjevfuLHqS1ET18SqF2sDAQnaC8U/aUihF26yTSpkLxoWApsEQkq6bNl0L0ok22zIspC2ELY1UALuJtld7xpSTSRSMKRSaXAvVFytRr14X8WsRH2t6ffn0XHeM39+8+/M78ycz/Bi5jdz/jzn80ye55znnDlzx9UT0zggAAEIQCBAAtMDbDNNhgAEIAABEcAB8BhAAAIQCJQADiBQxdNsCEAAAjgAngEIQAACgRLAAQSqeJoNAQhAAAfAMwABCEAgUAI4gEAVT7MhAAEI4AB4BiAAAQgESgAHEKjiaTYEIAABHADPAAQgAIFACeAAAlU8zYYABCCAA+AZgAAEIBAoARxAoIqn2RCAAARwADwDEIAABAIlgAMIVPE0GwIQgAAOgGcAAhCAQKAEcACBKp5mQwACEMAB8AxAAAIQCJQADiBQxdNsCEAAAjgAngEIQAACgRLAAQSqeJoNAQhAAAfAMwABCEAgUAI4gEAVT7MhAAEI4AB4BiAAAQgESgAHEKjiaTYEIAABHADPAAQgAIFACeAAAlU8zYYABCCAA+AZgAAEIBAoARxAoIqn2RCAAARwADwDEIAABAIlgAMIVPE0GwIQgAAOgGcAAhCAQKAEcACBKp5mQwACEMAB8AxAAAIQCJQADiBQxdNsCEAAAjgAngEIQAACgRLAAQSqeJoNAQhAAAfAMwABCEAgUAI4gEAVT7MhAAEI4AB4BiAAAQgESgAHEKjiaTYEIAABHADPAAQgAIFACeAAAlU8zYYABCCAA+AZgAAEIBAoARxAoIqn2RCAAARwADwDEIAABAIlgAMIVPE0GwIQgAAOgGcAAhCAQKAEcACBKp5mQwACEMAB8AxAAAIQCJQADiBQxdNsCEAAAjgAngEIQAACgRLAAQSqeJoNAQhAYAYIIBAIgZmzijZ08mrRlKSDQKcJ4AA6rT6ETyGQNPTnzkyfOD941Mcn5qRkmHppbNFlXVi08Nripden3pmGY7CA8LPrBHAAXdcg8k+LLL4M9NGjs4yV37dv7tHD0w98NPO4bcZvElsxfZpumX+zIOru+s2Tq9ZcX7n62rK7J+UbVq26GlWnXLiELHRc7wSBO66e6IScCAmBKQQiK/zbwwOLL3P/77tnf/q/N9PIcOsYu2dKlso/xk8PskaORIU/+cyVTZu+tPwBzqAyYTKOigAOYFTkqbc0gbjRP/TZXe/vnrVr70yV0qy5LyJW3CVs3zr5yLarD9z/xTfX3Jw6wBMUYUgaHwjgAHzQAjLkETB2X1b1wCfz1dN/+Y3ZSi2j31QHP6/uYvfkD8z44KXnBiOD9esuRjIXK4BUEBgNARzAaLhTaxECMqM+2/1kEyJPoGHBd793CU+QRMQVrwjgALxSB8IMCJjus4L7v/r1Qg/7+wWVZCYkNCZ47NHzJjpEaKggOpK1RgAH0BpqKhpOIOry/+1fL5AB9SrOM1z6tBRmTPDgN6a98voFMyDADaRx4tpoCOAARsOdWi0CxvS/95uxp56fp1uymD07zIBg588ufftb46axPWsgzekiARxAF7XWK5njpr8HXf583ZgBAW4gnxJ3WyOAA2gNNRXZBIIy/fHG4wbiNDgfIQEcwAjhB121rP/+/fMffnxB73v9WWo2buCDdy5s2HBRaZgbyALFdXcEcADu2FJyOgGZfm3O84MXF+s1rv7F+tPbnH1VcwOC8OZbZ7VSCB+QzYk7TgiwHbQTrBSaSkCmX8eOHYvvW7vs6BGs/4CGcYFrH1oiLPppEA1ucEDAPQFGAO4ZU8MNAsR88h+EeESIoUA+K+42RYARQFMkKSeTQNTxV8RfHV5/tnDIlHgUN4RFcISIocAo8AdaJyOAQBXfZrMnxqcr5hPsZG9Z1GYocHAPswJlyZG+NAFGAKWRkaE4AfX99W6XrD8d/+LQzFBAswK7fjnGlEBxbqSsQAAHUAEaWYYTiMI+erPXzHMOz0OKGAFBEzoTDopd5hQCTRIgBNQkTcoyBGT9NY359FNL9UEuIv51ngqFgwTw3d2n9H1KZobrkCRvKgFGAKlYuFidgKy/lvnPv3c51r86xFs5jftUDE1ICQfdosJ/GyOAA2gMJQWJgLH+BP2bfRgUDhJS7Y+ND2gWLKXhAHgGGiMg8yQjZax/Y4VS0A0C8gGaFsYH8Dg0SwAH0CzPcEsz1l9GiilfRw8BPsAR2JCLZRI4ZO032Xaz2B/r3yTTtLK0dxCvCKSB4VoVAowAqlAjT5yA+v5Y/zgQp+dmHMCcsFPI4RTOCCAcXTts6QMrlrPc0yHfRNEaB/zu4KlFY9cTd7gAgRIEGAGUgEXSJAF1/7XeP3mdK04JaF8N7afttAoKD4EADiAELbtqo6y/XlVlvb8rvtnlarwl7K/+ZLFUwAGBygQIAVVGF3pGmR7zSS8mfkf1KCgQZD4oxkvCo1JB1+vFAXRdg6ORX9Zf85As+R8N/VitTAbEYHBamgAOoDQyMoiAHMDGdctB4QmBvftPeiIJYnSLAHMA3dKXF9LK+munYvU9OXwgoA3jtOe2lMIBgbIEGAGUJUZ6Vv179wwQCPJOJR0RiBFARxTljZjqaWoBopYhcvhDwKwKZRDgj0a6Ign/H3dFU17IKROjlT+79rLLvxfqiITQqlApRarBB0RMOClCgBBQEUqkuU2Al35vs/DsTIGgiydOeiYU4nhNgBGA1+rxSjj1Lg98Mv84uw94pZWYMAoEMRsc48HpcAKMAIYzIoUhIAcwd+lyXvvy+XlgEOCzdjyUjRGAh0rxUSQT/fdRMmSaSkCjNGYCpiLhVyYBRgCZaLgRJyCbsuYetvyMI/H0XK8FHD59ks0hPFWPZ2IxAvBMIV6KI+uvjxF6Hv2X4dOfYiD6d+THCCWRmvhy5MgfgK4IMKMrgiLnaAn86tcLK6z9lznWUSGj1Vjje3KmH1TRS89d2bTpS2U89fnMp56fp0rLfqJAhSjX+s2T2mhTNeZUZ4kX/6lCtm+dfOX1S7q4b9/cl9+YXbwcuY3Iy1aQ34ih6l7dMbbz7TNxqTiHQCoBQkCpWLhoE5h/b+np31WrJ3/82rnFS5tZNpSz86js5oefnopXpACItkp++59mF/cBViE51dloYr9l/c32nNG14uWYvOvXXdR4Sxvt/fxf/7CU/FGNOlFRfC4mDoTzLAJf+7sXsm5xHQI3CWhe8d/emXP3H5QAIhv0nx+dnr/gK9ni6//XwN+KFVc2/8lX//BzWwxV9N//NbD+8Yok6OYtlz49eOeR//nanfOHi61C9v7H2fv+6FpUiKq748qcA3tnFMluKpALee7ZK9/5zkRUiBpesBxjstf88WXDau6dX0n+C5fLCRC18/OL0/78T6+rapXGAYEcAswB5MDh1oCAOqT/8s/ziscxlEWmUAEZZZQpbOpQURs2XLRKk91Uj9tYf+uW0mv8EUVUrLvWT8VbvrnmqiXtY4+eL5jdlKbEJgZlFa6L+eWoFfrOe7IVZQWI6pWypLLoJycQyCKAA8giw/WbBGQWtc1AWRwrV18rm6VIelnq+KGf8gqW4Y4SyKQqHC9vNPRQ3H9oGkcJjPVPup+a1UllWVhqlkz2PhGY+v9Tn1pGW5ogoF684j9lS1Lk/f3dzW9PrMh4vCsty/6jnw7mWnOO737vUjxLTkrrlqznooVOfFi8onzrf+izuyyHF8879JwXAoYiIgEOgGdgCAEtqqlghqK9yeRCUv9Sa01NGV3UvGhcEln2LRvP5/RzdUtzqqkVxS8WGSLE0zd1buJXWX1/LeXUWqbik9iWVAIlxVkX+QkBiwDLQC0g/LQJ/ONrVcyQwtAPP75g+9Z5j2y7uuzuSRmj+L+qQ7Z70diUBUIy9LJ66vbGU5pzpf/7FwZB7bhBVHjHipsfPTpL3fZ4sSpTsxH5y2niZdqNd/bbWP/U+JXhsPahJaXmXSxJ1SgpbvsT49Z1fkIgTgAHEKfBuU1AnWiZqmqWSLmOHpl54IWUfqg67wf3fLF46ZR5V9Ul62+W8NtyTDX9uiupzFr7KKXsprLrp6xefFigqdSX31gyFqXz4CTH+ks6RbpqWn/TRNUS5+BBuxHBOwI4AO9U4pVA6lPXlCe1f3087XOSsuA6FLtIzZIUQ+Edy8BplKDp3O1P3E6rBIqx3P7t8iwensqpR3Z5588uZfX9Zf3vW7usmsdNVir1ZYWYkom5EiAB5gACVHrRJssij0/MKZq6xXTRMtOoThM20cBCcw+yodF1cyKDmxPoz7lllZP/s8hss7H+1hglKrZZ669i/VRf1F5ORk7A/l9l5AIhgFcEqs0Au26CTK0CO1YtZs2MuuFHjn3dDCZMAg0CHrj/ixzrXHDAYVVX4WeO9ZfAE+NN9v0lHvPAFXQUWhYcQGgaL9feY0c8DRImIxuK/xhTnnwHSokLxmfK0SmTOsf6q5jG+/5GNG/VV4YcaR0SwAE4hNuDoo8ent5aB7kgLkVsFNKxEkeblUra1CiQ3hhoKtRjVV3wpxYjpUZ+XPT9jUhCIfUVFI9kYRLg+QhT70VbrX0xiyZtK52COQrpxKd/ZUNN/MeIkIwC6bpWnWZFgZw6BiOnrP8Pf3guLrMRVZI76vub8j1UnxGMfz0hgAPwRBGeipFlNEcorlbIJBf2RPEfI5gVBZLlNdtCpIrd1BAnK8q0euXvR2L91VgP1ZeqAi6OigAOYFTkqbcKAUXSX3n9QjynOtFR/Mdcz4oCaVsIZXd3ZFlbvZiW7PtLDKd9f3fNpOQ+EcAB9EmbQbRFHWrLnsbjPwZBMgqkLEW2hWiT4MR5TyfY24RAXaMlgAMYLX9qL0fAbP9g5bHiP+auFQXSRY0VFItPRvyTV6zyHf1UIEt7WTsdlDiSnGJ7QwAH0BtV9r8hspUK41jtVCAlGXtJjQJpEJC6NX9TcwCWYEN/Sh69D5zqk4bmJQEEGiGAA2gEY28LyZrYHFWDre0f1Kn/8OPMjxVbb4RJZt+iQPIB3/+bc6PyQKNSIvX6QwAH4I8ufJTEH9ukQI06y7L41pG1WakWCxWPAlllVvuZ7ywlud71Tcqvut7dfcpRIKipPYWqASGX/wRwAP7raJQS6sPuo6w+VrfiPMntHxT/yTGdqW+EJb+z2NQcQDISFYkvu79jx2Lt8qYuf/LQElVHkwH+qC/Zaq74QAAH4IMW/JVh1ZrrTdnHmo1U/9ra/kFW1cR/JGHqX+paoOQ7BK5HOcb6v/zGbMnz6k8WJwcBZjIgf8e6CvTEROqrkJEs4RBgIVo4ui7dUhkmzZrqayqlczadQbYs+fVHiafNFfSXU5vS6M86ZGpTFw5ZyRr5KXO/f/98WX8TjdHJytVjyT0hTFv0HU29u9ugQ3L0ZeZGyFCIDwQYAfigBU9lMH3VnMhGa3JLhtSvPxr7nvNvUkIlzt8cNJmlwStyA/rijSJXqeOAN3eeaZC2itL31BoUnqL6RwAH0D+dNtmisUWXmyyuUlnq/qcu/69U2OBtAEWB4hO2Kr/NQz5gy4PpkwGS7eCeszmzGmXllPrk8DggkEUAB5BFhuuD4EkyYt4+F/Vkk8v/K4thDGJ8c9CmQi5xpzJUvKzJAAFXhKopH7BqFeZ/qCqCToADCFr9RRqv3neRZE7TWMv/69eVszlo5cKLR2/kcjQZoLmB1ECQZgjqvx1mhk3J8iu3joy9JIAD6KVam2zUI9uuthwkiUuvqlOX/8fTlD3XICC+OWh+63Q3569s1VF6BYIefnyBJgOiK9GJxNPbYdHPyidSXOW8ZAyEAKuAAlF0xWbKGN2YMp03VrGAutnUrU4u/1fHdtcvxzSbWrB0BVWSC28UVpIJliHOCQEpY34VWrejtw1USIVDuf5i27K9+0+m5v3w01N1vg4vblJcaslchEBEAAcQoeAkncDI48gKi5vAfVw+vQBc3Oxq0ae1WlQF3tgWYkG8TOtc2zhbuawE+rn9iWnfPzxr7UNLigsTL0RjC00GpH4tQGMUuR85uWolqxYpLsktXjvnEEgZgQIFAhaB+iFpq8CCP2UfU/vg+S8AJwtXd1jfDEheH9ouGdChf7KzElKiVjiGTgZUtv6auWECoIJGQsuCAwhN46XbKzuSuolm6YLKZ0iNY0ge7fJWasmNEuubAZZBNO0qL5SdQ+Voub1ErXbIxGdNBqhAff2mgmvRIqIG101Vaxe5OkEAB9AJNY1SyFvRkoZlGJ+YkyxRIfWciHyUXru8FUkWpVdihYyin/ETY7gVx49fbPlcPkCTAZZ/kgx1AjiNr5tqmQnVtUMAB9AO527XIts0NFpSqoUyedZWnapCgR3LEJuee7zk1GTxBFnn6hQrCmQZ2VOfz4xGEqmLMrNKs66rLWqRirIaZZLpYlSLlTH6qW6+douzxNPPffvmRmkKnqioxtdNFayaZJ0jgAPonMpGI3ByE82acsjWayWPbJz5k/X/wYuLZUbjh3rumgU1ptkkU6c4mSyeJetcJT/9V0uUPapRxapwM5LQXcVhdEXZowRFTrTDswy3NvBRRhVlNUolqI26aGrJks3k1ZsBcSAmry4OzWsVqzGNlFVn9GAVyM8eE7jj6oket46mNUZA9mjjuuWNFXejIPVVZa00XXn0yEz10C3rH9WlW0qjVe3HjsyQQVRvuqxNjBel3rG2SEtdvqmKzKEqhsb0ozSWPGqUxHv2xcH6Ua0+0r/FpVVeHU8+c0X/mj34iucd5Lx1fPzJSRzALRj8N48ADiCPDvciAnIA6iCbhfPRxdZOjGVUddUMYlxOU1T9cuJlJs/r1FInr3yYPi2gL03iAJJK4UqSAA4gyYQr6QTkA9bcs9y16Uyvm6vFCMh5HD5N978YLFJNm8YcAE9BUQLqVL75iwtRnKRoNtK1RUCqkYLaqo16+kCAEUAftNhaG1zMBLQmfAgVEf0PQcsNtpERQIMw+1/UYBDwVpMb1vcfWVstHHT/3zrbVm3U0xMCOICeKLK1ZmhnHq3JMROVrVVKRfkEpA6tbkrdNCk/I3cDJ0AIKPAHoHTzFQXSmv06G1WWrpIMwwio+/+7g6e0e92whNyHwBQCjACm4ODHUAKKApmNKpkNHsqqnQRShJZ+SintVEctfSKAA+iTNttri/ZJJhDUHu7smhT8kSJY+J9NiDt5BAgB5dHhXg4B7YJAICiHTzu3CP60w7mvtTAC6KtmnbdLMYeDe1gR5JxzTgWy/lIBwZ8cRNzKJ4ADyOfD3UwCmgzQshN9C4XJgExGLm8Iu+Cz8scl4/6XjQPov47dtVA+gMkAd3hzSjbrPgVfKuCAQGUCzAFURkfG2wS2bmh4o9DbRXOWQSDra/IZybkMgRQCOIAUKFwqRYA3A0rhqp9YwZ+LJ07WL4cSIEAIiGegLgHzZoBeRGIyoC7KAvkFWajldDkgUJ8ADqA+Q0oYfL1Wa1HwAa4fBWP9hZrQv2vUgZSPAwhE0c6biQ9wjRjr75pwgOXjAAJUuqsm4wMckdWaH/1pgEXf3xHhYIvFAQSreicNlw/QlmQyVSpdNoujPgFh1FfYDh0/ifWvD5MSLAI4AAsIPxsgIFOlRYrrN7NrdF2Ysv7CaFZ8EvevS5P8CQI4gAQSLtQmYEzVzrfPPPnMFZYGVcYpdAIojJVLICME8gnwHkA+H+5WJ2CWKu7fP//hxxc8+I3q5YSZU9ZfmzyzzWeY2m+t1TiA1lAHWpF5TWzLg8vUfsWyOYYSMEH/d3cz5TsUFQnqEiAEVJcg+fMJmGnhw6dPEg7KB2XuquP/o59eUtBfc+kE/YsQI00dAowA6tAjbwkCGgr89vCstQ8tWTGdoUAKN7No6r0PzrLBZwodLrkhgANww5VS0wjIB6hX+95vxp56fh6zAhEhmf7j1wd7O3/7W+MGUXSLEwg4JUAIyCleCp9CwMQ0tImxXhRYtXqSBUKiY5b6CIiw6CdhnylPDD8cE2AE4BgwxWcQUFdXC4Se/ssF6vyGORqQ6Vc0jJhPxgPC5TYI4ADaoEwdqQTkA3QYNxDUAiFj+t/8xWCVpwjQ6099PLjYAgEcQAuQqSKPgNyAmRwOYRyA6c97FLjXOoEZrddIhRCwCRz67C4FQ3p8mGleeTjzbpdaSq+/x+ruUNMYAXRIWf0UVSOAjet6+0VJY/pfeu7KY4+e1/pOqRDT38/nuJutYgTQTb31SOpzZ6YrMNKz+I+x+xrW6K2uLRvPm408Mf09emx70hQcQE8U2dFmqPt/5NjXOyp8Umxj93Vdi/ofuP+LqMuP6U+y4ooPBHAAPmghaBn27Zvb6QmAyOib/j52P+inuWuNZw6gaxrrl7waAay5Z3nn1oDGjb72ONq06cvVK3+vOI9RDv39fj2kfW4NI4A+a9f/tmkCQC+CjTUtqAy0Oeq7FlOUhIyO7Vsnn33x6rK7Jy2jj92PEHHSFQI4gK5oqodyOpoA0JSyQvDidezIjKOHpx/4aGbcfBfnqJCOvsb1Z9uur1x9TeZ+bNHlRQuvRd18lSOLj9EvzpOUHhLAAXiolIBEanYCQKZf3fN3d5+Lm2lDU5Z6Ynz6xPnBAz8+MSeJWPbdXJSV10lqCbqOxU+i40p3CTAH0F3ddV5yjQDmLl3e1AJQ0/HXlmpDbbTqTR5DcyWzcAUCXSfACKDrGuyw/NoBohHp4x3/Ina8SJpGBKMQCHhOAAfguYJ6K5664Y3sABHv+GPZe/u40DA3BHAAbrhSagEC7++eVWeVjtbnKLt20le8HtNfgDdJIGAT6PUWXHZj+e0RAZnsXXtnVhZIHX/tsvDxJ3w7tzJCMkJgGiMAHoIREFD8p/IEgFmYT8d/BGqjyt4RYATQO5V2pEHVJgBMx//Q8ZOEfTqiZ8T0mgDLQL1WT1+F0wig7BbQpuPPBxT7+kjQrpEQYAQwEuxBVyrrb7aALk5BHX9tuaOOv/bXZL63ODdSQiCfAHMA+Xy464RA8S2g1fHXRg4H95w1ph/r70QfFBoqAUYAoWp+pO0uuAOE6fhfPEHHf6TaovL+EmAOoL+69bVlCgEN3QLa6vj72hTkgkC3CTAC6Lb+uii92QI6R3I6/jlwuAWBBgkwB9AgTIoaTkDd/5wJANPx/+CdCxs2XFS4n4j/cKCkgEANAowAasAja3kCsulZEwBRx99Y//JlkwMCEChHgDmAcrxIXZOARgDJLaCtjn/NKsgOAQgUJMAIoCAokjVDILkDhDr++vCWtnag498MYkqBQGECzAEURkXC2gTU/Y9/jcvq+BPxrw2YAiBQjgAhoHK8SF2fwPx7l5tC9PnGH782+Hwjpr8+VUqAQAUCOIAK0MhSi4C+zWsWAhHzqcWRzBCoTQAHUBshBZQnoFiQDjr+5cmRAwJNEmAOoEmalFWQAKa/ICiSQcApAVYBOcVL4RCAAAT8JYAD8Fc3SAYBCEDAKQEcgFO8FA4BCEDAXwI4AH91g2QQgAAEnBLAATjFS+EQgAAE/CWAA/BXN0gGAQhAwCkBHIBTvBQOAQhAwF8COAB/dYNkEIAABJwSwAE4xUvhEIAABPwlgAPwVzdIBgEIQMApARyAU7wUDgEIQMBfAjgAf3WDZBCAAAScEsABOMVL4RCAAAT8JYAD8Fc3SAYBCEDAKQEcgFO8FA4BCEDAXwI4AH91g2QQgAAEnBLAATjFS+EQgAAE/CWAA/BXN0gGAQhAwCkBHIBTvBQOAQhAwF8COAB/dYNkEIAABJwSwAE4xUvhEIAABPwlgAPwVzdIBgEIQMApARyAU7wUDgEIQMBfAjgAf3WDZBCAAAScEsABOMVL4RCAAAT8JYAD8Fc3SAYBCEDAKQEcgFO8FA4BCEDAXwI4AH91g2QQgAAEnBLAATjFS+EQgAAE/CWAA/BXN0gGAQhAwCkBHIBTvBQOAQhAwF8COAB/dYNkEIAABJwSwAE4xUvhEIAABPwlgAPwVzdIBgEIQMApARyAU7wUDgEIQMBfAjgAf3WDZBCAAAScEsABOMVL4RCAAAT8JYAD8Fc3SAYBCEDAKQEcgFO8FA4BCEDAXwI4AH91g2QQgAAEnBLAATjFS+EQgAAE/CWAA/BXN0gGAQhAwCkBHIBTvBQOAQhAwF8COAB/dYNkEIAABJwSwAE4xUvhEIAABPwlgAPwVzdIBgEIQMApARyAU7wUDgEIQMBfAjgAf3WDZBCAAAScEsABOMVL4RCAAAT8JYAD8Fc3SAYBCEDAKQEcgFO8FA4BCEDAXwI4AH91g2QQgAAEnBLAATjFS+EQgAAE/CXw/yT/0zT8HAQrAAAAAElFTkSuQmCC"
              />
            </defs>
          </svg>
          카카오톡
        </div>
        <div
          className="flex cursor-pointer flex-col items-center justify-center gap-[6px] rounded-[10px] p-2 hover:bg-gray-100 active:bg-gray-200"
          onClick={handleUrlCopy}
        >
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16.5" cy="16" r="16" fill="#0B00E2" />
            <path
              d="M7.72793 12.82V17.38C7.72793 17.9133 7.8246 18.3833 8.01793 18.79C8.21793 19.19 8.50126 19.5033 8.86793 19.73C9.24126 19.95 9.67793 20.06 10.1779 20.06C10.6779 20.06 11.1113 19.95 11.4779 19.73C11.8446 19.5033 12.1246 19.19 12.3179 18.79C12.5179 18.3833 12.6179 17.9133 12.6179 17.38V12.82H13.6679V17.38C13.6679 18.1067 13.5246 18.7467 13.2379 19.3C12.9513 19.8467 12.5446 20.27 12.0179 20.57C11.4913 20.87 10.8779 21.02 10.1779 21.02C9.47793 21.02 8.86126 20.87 8.32793 20.57C7.80126 20.27 7.3946 19.8467 7.10793 19.3C6.82126 18.7467 6.67793 18.1067 6.67793 17.38V12.82H7.72793ZM20.2443 20.83L18.4243 17.98C18.2243 17.9933 18.0743 18 17.9743 18H16.0243V20.83H14.9743V12.82H17.9743C18.6409 12.82 19.2143 12.9267 19.6943 13.14C20.1809 13.3467 20.5509 13.6467 20.8043 14.04C21.0576 14.4267 21.1843 14.8833 21.1843 15.41C21.1843 15.9767 21.0376 16.4633 20.7443 16.87C20.4509 17.2767 20.0276 17.5767 19.4743 17.77L21.4843 20.83H20.2443ZM17.8943 17.06C18.6009 17.06 19.1509 16.92 19.5443 16.64C19.9376 16.3533 20.1343 15.9433 20.1343 15.41C20.1343 14.8767 19.9376 14.47 19.5443 14.19C19.1509 13.9033 18.6009 13.76 17.8943 13.76H16.0243V17.06H17.8943ZM23.3512 19.88H27.7512V20.83H22.3012V12.82H23.3512V19.88Z"
              fill="white"
            />
          </svg>
          링크복사
        </div>
      </div>
    </div>
  )
}

export default Share
