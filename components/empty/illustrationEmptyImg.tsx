import React, { useContext } from 'react'
import ConfigContext from '../config-provider/ConfigContext'

function IllustrationEmptyImg() {
  const { getPrefixCls, prefixCls } = useContext(ConfigContext)
  const emptyPrefixCls = getPrefixCls!(prefixCls, 'empty')
  return (
    <svg
      className={`${emptyPrefixCls}-image`}
      width="200px"
      height="114px"
      viewBox="0 0 200 114"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>切片</title>
      <defs>
        <rect id="path-1" x="0" y="0" width="200" height="114"></rect>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-3">
          <stop stopColor="#F2F5FA" offset="0%"></stop>
          <stop stopColor="#F2F5FA" stopOpacity="0" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-4">
          <stop stopColor="#F2F5FA" offset="0%"></stop>
          <stop stopColor="#F2F5FA" stopOpacity="0" offset="100%"></stop>
        </linearGradient>
        <path
          d="M1.65924929,1.58062569 C1.8889022,0.50289476 2.95093586,-0.185073735 4.03136787,0.0440050452 C5.11179988,0.273083825 5.8014926,1.33246241 5.57183969,2.41019333 L5.56004989,2.46216547 L5.56004989,2.46216547 L3.39146206,11.2716446 C3.19461671,12.195414 2.28430214,12.7851013 1.35821756,12.588748 C0.432132984,12.3923948 -0.15903221,11.484356 0.037813143,10.5605866 L1.63752649,1.70000685 C1.64352938,1.66026552 1.65076142,1.62045814 1.65924929,1.58062569 Z"
          id="path-5"
        ></path>
        <path
          d="M3.2335764,0.0440050452 C4.31400841,0.273083825 5.00370113,1.33246241 4.77404822,2.41019333 L4.76225843,2.46216547 L4.76225843,2.46216547 L3.61607194,7.1179134 L-1.62409768e-13,6.35121513 L0.839735026,1.70000685 C0.845737915,1.66026552 0.85296995,1.62045814 0.861457819,1.58062569 C1.09111073,0.50289476 2.1531444,-0.185073735 3.2335764,0.0440050452 Z"
          id="path-7"
        ></path>
        <path
          d="M2.51813448,5.99787613 C1.45120227,6.28304504 0.354528358,5.65146297 0.0686447348,4.5871981 C-0.217238888,3.52293322 0.415926091,2.42900099 1.4828583,2.14383208 C1.51736247,2.13460983 1.55189774,2.12634636 1.5864357,2.11902531 L10.3881284,0.0586912483 C11.3026418,-0.185739249 12.242648,0.355616807 12.4876911,1.26784384 C12.7327342,2.18007088 12.1900213,3.11772708 11.275508,3.36215757 L2.6346324,5.96298498 C2.59640862,5.97569192 2.55756782,5.98733641 2.51813448,5.99787613 Z"
          id="path-9"
        ></path>
        <path
          d="M0.111983294,4.13319059 C-0.255581364,2.76485004 0.311368053,1.42441577 1.37830026,1.13924685 C1.41781627,1.12868504 1.4574639,1.11971891 1.49719789,1.11231428 L6.44654147,-4.05009359e-14 L7.35298648,4.65178191 L2.83125349,6.05655516 C2.79139485,6.07073359 2.75075844,6.08338397 2.70936963,6.09444634 C1.64243743,6.37961526 0.479547952,5.50153115 0.111983294,4.13319059 Z"
          id="path-11"
        ></path>
        <path
          d="M3.3628604,1.13914634 C3.3628604,1.13914634 4.96984445,2.41461745 4.75200088,3.35235885 C4.55443848,4.20156223 3.43408308,4.09719685 3.43408308,4.09719685 C3.43408308,4.09719685 2.56748085,3.91583671 1.68763621,3.46779149 C1.11105463,3.17397378 -0.0683547472,2.77864676 0.00310653282,2.44389212 C0.0961612881,2.00739016 1.23596274,2.60787786 1.48589827,2.39998012 C1.99233088,1.9785915 0.298853633,0.845566643 0.123123307,0.514858095 C-0.22022488,-0.131564658 1.44664825,-0.40550891 3.3628604,1.13914634"
          id="path-13"
        ></path>
        <path
          d="M5.71428571,1.87887927e-12 L5.14285714,14.82 L4.85714286,30.78 L0.857142857,30.78 L0.571428571,14.82 L0,1.87887927e-12 L5.71428571,1.87887927e-12 Z"
          id="path-15"
        ></path>
      </defs>
      <g id="空组件" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="空组件标注" transform="translate(-65.000000, -512.000000)">
          <g id="编组" transform="translate(65.000000, 512.000000)">
            <mask id="mask-2" fill="white">
              <use xlinkHref="#path-1"></use>
            </mask>
            <use id="矩形" fill="#FFFFFF" xlinkHref="#path-1"></use>
            <g mask="url(#mask-2)" id="背景/云">
              <g transform="translate(11.428571, 37.050000)">
                <g
                  transform="translate(34.285714, 34.200000) scale(-1, 1) translate(-34.285714, -34.200000) "
                  fill="url(#linearGradient-3)"
                  id="形状结合"
                >
                  <path d="M4.28571429,55.575 L4.28571429,34.2535714 C4.28571429,22.4188982 13.8796125,12.825 25.7142857,12.825 C36.3598894,12.825 45.1923741,20.587885 46.8597669,30.7616821 C48.2786739,30.2207368 49.8190861,29.925 51.4285714,29.925 C58.5293754,29.925 64.2857143,35.6813389 64.2857143,42.7821429 L64.2857143,55.575 L4.28571429,55.575 Z"></path>
                </g>
              </g>
            </g>
            <g mask="url(#mask-2)" id="背景/云">
              <g transform="translate(142.857143, 51.300000)" fill="url(#linearGradient-4)" id="形状结合">
                <path d="M17.1428571,8.55 C24.2401777,8.55 30.1286667,13.7256234 31.2399627,20.508509 C32.186033,20.1471098 33.2128549,19.95 34.2857143,19.95 C39.0195836,19.95 42.8571429,23.7875593 42.8571429,28.5214286 L42.8571429,37.05 L31.4281429,37.049 L31.4285714,37.05 L2.85714286,37.05 L2.85714286,22.8357143 C2.85714286,14.9459321 9.253075,8.55 17.1428571,8.55 Z"></path>
              </g>
            </g>
            <g mask="url(#mask-2)" id="加密网页">
              <g transform="translate(42.857143, 0.000000)" id="编组-3">
                <rect id="矩形" x="0" y="0" width="114.285714" height="114"></rect>
                <g id="编组-2" transform="translate(7.142857, 17.812500)">
                  <path
                    d="M0,14.25 L100,14.25 L100,74.8035714 C100,76.776017 98.401017,78.375 96.4285714,78.375 L3.57142857,78.375 C1.59898304,78.375 -2.42298035e-15,76.776017 0,74.8035714 L0,14.25 L0,14.25 Z"
                    id="矩形"
                    fill="#E2E8F3"
                  ></path>
                  <path
                    d="M14.2857143,32.0625 C16.2581598,32.0625 17.8571429,33.6574856 17.8571429,35.625 C17.8571429,37.5925144 16.2581598,39.1875 14.2857143,39.1875 C12.3132688,39.1875 10.7142857,37.5925144 10.7142857,35.625 C10.7142857,33.6574856 12.3132688,32.0625 14.2857143,32.0625 Z M28.5714286,32.0625 C30.5438741,32.0625 32.1428571,33.6574856 32.1428571,35.625 C32.1428571,37.5925144 30.5438741,39.1875 28.5714286,39.1875 C26.598983,39.1875 25,37.5925144 25,35.625 C25,33.6574856 26.598983,32.0625 28.5714286,32.0625 Z M42.8571429,32.0625 C44.8295884,32.0625 46.4285714,33.6574856 46.4285714,35.625 C46.4285714,37.5925144 44.8295884,39.1875 42.8571429,39.1875 C40.8846973,39.1875 39.2857143,37.5925144 39.2857143,35.625 C39.2857143,33.6574856 40.8846973,32.0625 42.8571429,32.0625 Z"
                    id="形状结合"
                    fill="#CAD0DB"
                  ></path>
                  <path
                    d="M3.57142857,0 L96.4285714,0 C98.401017,6.20111266e-15 100,1.59898304 100,3.57142857 L100,14.25 L100,14.25 L0,14.25 L0,3.57142857 C-1.11749669e-15,1.59898304 1.59898304,8.06421577e-16 3.57142857,0 Z"
                    id="矩形"
                    fill="#CAD0DB"
                  ></path>
                  <ellipse
                    id="椭圆形备份-2"
                    fill="#F2F5FA"
                    cx="92.8571429"
                    cy="7.125"
                    rx="3.57142857"
                    ry="3.5625"
                  ></ellipse>
                </g>
              </g>
            </g>
            <g mask="url(#mask-2)" id="锁">
              <g transform="translate(88.571429, 47.025000)" id="编组">
                <path
                  d="M41.2497143,5.878125 L41.25,15.675 L51.0707143,15.674125 L51.0714286,50.9290179 C51.0714286,54.183553 48.4331066,56.821875 45.1785714,56.821875 L13.75,56.821875 C12.665155,56.821875 11.7857143,55.9424343 11.7857143,54.8575893 L11.7857143,7.84241071 C11.7857143,6.75756567 12.665155,5.878125 13.75,5.878125 L41.2497143,5.878125 Z"
                  id="形状结合"
                  fill="#B3D5FF"
                ></path>
                <polygon id="矩形" fill="#85B8FF" points="41.25 5.878125 51.0714286 15.675 41.25 15.675"></polygon>
                <rect id="矩形" fill="#85B8FF" x="15.7142857" y="15.675" width="5.89285714" height="5.878125"></rect>
                <rect id="矩形" fill="#85B8FF" x="15.7142857" y="25.471875" width="31.4285714" height="3.91875"></rect>
                <rect id="矩形" fill="#85B8FF" x="15.7142857" y="33.309375" width="15.7142857" height="3.91875"></rect>
                <path
                  d="M7.85714286,48.984375 L45.1785714,48.984375 L45.1785714,56.821875 L13.75,56.821875 C10.4954649,56.821875 7.85714286,54.183553 7.85714286,50.9290179 L7.85714286,48.984375 L7.85714286,48.984375 Z"
                  id="矩形"
                  fill="#276FF5"
                ></path>
                <path
                  d="M45.1785714,56.821875 C48.4331066,56.821875 51.0714286,54.1901488 51.0714286,50.94375 C51.0714286,48.7794841 51.0714286,46.8201091 51.0714286,45.065625 L39.2857143,45.065625 C39.2857143,47.6555109 39.2857143,49.6148859 39.2857143,50.94375 C39.2857143,54.1901488 41.9240363,56.821875 45.1785714,56.821875 Z"
                  id="椭圆形"
                  fill="#B3D5FF"
                ></path>
              </g>
            </g>
            <g id="男-打电话" mask="url(#mask-2)">
              <g
                transform="translate(148.571429, 68.400000) scale(-1, 1) translate(-148.571429, -68.400000) translate(102.857143, 22.800000)"
                id="编组-6"
              >
                <g id="编组-9" transform="translate(34.745657, 17.604294)">
                  <g id="路径-3" transform="translate(0.000000, 11.579706)">
                    <g id="路径-6" transform="translate(2.397200, 0.000000)">
                      <mask id="mask-6" fill="white">
                        <use xlinkHref="#path-5"></use>
                      </mask>
                      <use id="路径" fill="#FFCDC0" xlinkHref="#path-5"></use>
                      <polygon
                        id="矩形"
                        fill="#FFB3AB"
                        mask="url(#mask-6)"
                        transform="translate(3.044116, 6.156000) rotate(24.000000) translate(-3.044116, -6.156000) "
                        points="-0.381975864 5.01871224 6.47233097 5.01234242 6.4702077 7.29328776 -0.384099135 7.29965758"
                      ></polygon>
                    </g>
                    <g id="路径-5" transform="translate(3.194992, 0.000000)">
                      <mask id="mask-8" fill="white">
                        <use xlinkHref="#path-7"></use>
                      </mask>
                      <use id="路径" fill="#276FF5" xlinkHref="#path-7"></use>
                      <polygon
                        id="矩形"
                        fill="#000000"
                        opacity="0.200000003"
                        mask="url(#mask-8)"
                        transform="translate(2.862514, 5.850982) rotate(-353.000000) translate(-2.862514, -5.850982) "
                        points="2.00626687 3.00113507 3.72048894 3.00061667 3.71876092 8.70082884 2.00453886 8.70134724"
                      ></polygon>
                    </g>
                    <path
                      d="M3.66726576,9.17667462 C4.61341774,9.20934905 5.35340873,10.0010002 5.32008189,10.9448769 C5.31780961,11.0092321 5.31200102,11.0726334 5.30284903,11.1349014 L4.3869672,21.1793963 L2.10275425,21.1005132 L1.89785972,11.0213312 C1.89287115,10.9572798 1.89144154,10.8922852 1.89376247,10.8265524 C1.9270893,9.88267563 2.72111377,9.1440002 3.66726576,9.17667462 Z"
                      id="路径"
                      fill="#FFCDC0"
                      transform="translate(3.606922, 15.177514) rotate(7.000000) translate(-3.606922, -15.177514) "
                    ></path>
                    <path
                      d="M2.39900905,24.4545656 C2.39900905,24.4545656 0.363284205,24.6850884 -0.146910979,23.8661285 C-0.608733256,23.1242892 0.25497138,22.4069176 0.25497138,22.4069176 C0.25497138,22.4069176 0.994284532,21.9233985 1.93170376,21.6196682 C2.54615949,21.4207715 3.65745047,20.8680464 3.84402432,21.1559451 C4.08739599,21.5312599 2.85880692,21.9104995 2.82976519,22.2344965 C2.771015,22.8910922 4.76688683,22.4984446 5.12486238,22.6088636 C5.82448073,22.8247977 4.84327356,24.1965269 2.39900905,24.4545656"
                      id="左手"
                      fill="#FFCDC0"
                      transform="translate(2.531251, 22.779499) rotate(109.000000) translate(-2.531251, -22.779499) "
                    ></path>
                  </g>
                  <circle
                    id="椭圆形"
                    fill="#FFCDC0"
                    transform="translate(6.012745, 13.632394) scale(-1, 1) rotate(12.000000) translate(-6.012745, -13.632394) "
                    cx="6.01274478"
                    cy="13.6323942"
                    r="1"
                  ></circle>
                  <ellipse
                    id="椭圆形"
                    fill="#FFCDC0"
                    transform="translate(4.111838, 22.553100) scale(-1, 1) rotate(12.000000) translate(-4.111838, -22.553100) "
                    cx="4.11183789"
                    cy="22.5531003"
                    rx="1.71410068"
                    ry="1.71018549"
                  ></ellipse>
                  <g id="路径-7" transform="translate(12.896734, 8.925065)">
                    <mask id="mask-10" fill="white">
                      <use xlinkHref="#path-9"></use>
                    </mask>
                    <use id="路径" fill="#FFCDC0" xlinkHref="#path-9"></use>
                    <polygon
                      id="路径-8"
                      fill="#FFB3AB"
                      mask="url(#mask-10)"
                      points="7.25886778 0.118140667 6.11601063 0.688140667 9.68743921 2.68314067"
                    ></polygon>
                    <polygon
                      id="路径-9"
                      fill="#FFB3AB"
                      mask="url(#mask-10)"
                      points="6.25886778 1.25814067 7.97315349 5.10564067 5.83029635 5.53314067"
                    ></polygon>
                  </g>
                  <g id="路径-4" transform="translate(12.705499, 9.968495)">
                    <mask id="mask-12" fill="white">
                      <use xlinkHref="#path-11"></use>
                    </mask>
                    <use id="路径" fill="#276FF5" xlinkHref="#path-11"></use>
                    <polygon
                      id="矩形"
                      fill="#000000"
                      opacity="0.200000003"
                      mask="url(#mask-12)"
                      transform="translate(3.142857, 5.985000) rotate(-10.000000) translate(-3.142857, -5.985000) "
                      points="1.43196427 2.24210468 4.85057411 2.31733532 4.85375001 9.72789532 1.71112979 9.72655167"
                    ></polygon>
                  </g>
                  <circle
                    id="椭圆形"
                    transform="translate(14.897231, 12.995919) scale(-1, 1) rotate(-105.000000) translate(-14.897231, -12.995919) "
                    cx="14.8972305"
                    cy="12.9959193"
                    r="1"
                  ></circle>
                  <ellipse
                    id="椭圆形"
                    fill="#FFCDC0"
                    transform="translate(23.728552, 10.635490) scale(-1, 1) rotate(-105.000000) translate(-23.728552, -10.635490) "
                    cx="23.7285524"
                    cy="10.6354896"
                    rx="1.71028743"
                    ry="1.71399897"
                  ></ellipse>
                  <path
                    d="M24.93191,11.6652689 C24.3490178,12.4094717 23.2716827,12.5414211 22.5256147,11.9599862 C22.4747465,11.9203429 22.4267315,11.8784068 22.3816021,11.834439 L14.7721678,5.19413331 L16.1793941,3.3974688 L24.4760415,9.15385904 C24.5309331,9.18746541 24.5844969,9.22449748 24.6364541,9.2649894 C25.3825221,9.84642436 25.5148022,10.9210661 24.93191,11.6652689 Z"
                    id="路径"
                    fill="#FFCDC0"
                  ></path>
                  <g id="左手-2" transform="translate(11.952397, 1.350861)">
                    <mask id="mask-14" fill="white">
                      <use xlinkHref="#path-13"></use>
                    </mask>
                    <use id="左手" fill="#FFCDC0" xlinkHref="#path-13"></use>
                    <polygon
                      id="矩形"
                      fill="#FFB3AB"
                      mask="url(#mask-14)"
                      transform="translate(0.955615, 3.466523) rotate(-10.000000) translate(-0.955615, -3.466523) "
                      points="1.03330198 1.85971337 2.29312065 2.08185339 2.9259469 4.5743354 -1.01471788 5.0733326"
                    ></polygon>
                  </g>
                  <path
                    d="M13.5841733,61.9076729 C13.9534636,61.361656 14.2984591,61.0557059 15.1913162,61.0557059 C15.7377262,61.0557059 16.5750567,62.0163458 17.7033079,63.9376257 C17.803288,64.1077089 17.746362,64.3266134 17.5762349,64.4265187 C17.5213906,64.4587255 17.4589421,64.4757059 17.3953403,64.4757059 L13.2962269,64.4757059 C13.0990517,64.4755804 12.9392095,64.3157383 12.9392095,64.118563 C12.9392095,64.0965743 12.941241,64.0746325 12.9452779,64.0530175 C13.1518118,62.947178 13.3647769,62.2320631 13.5841733,61.9076729 Z"
                    id="右鞋"
                    fill="#001C5E"
                  ></path>
                  <g
                    id="编组-4"
                    transform="translate(14.265567, 46.231304) rotate(-2.000000) translate(-14.265567, -46.231304) translate(11.408424, 30.841304)"
                    fill="#2C3E68"
                  >
                    <g id="编组-7备份" transform="translate(0.000000, 0.000000)">
                      <path
                        d="M5.71428571,0 L5.14285714,14.82 L4.85714286,30.78 L0.857142857,30.78 L0.571428571,14.82 L4.22240021e-12,0 L5.71428571,0 Z"
                        id="形状结合"
                      ></path>
                    </g>
                  </g>
                  <path
                    d="M5.01274478,61.9076729 C5.38203501,61.361656 5.72703049,61.0557059 6.61988764,61.0557059 C7.1662976,61.0557059 8.00362818,62.0163458 9.13187937,63.9376257 C9.2318594,64.1077089 9.17493342,64.3266134 9.00480635,64.4265187 C8.94996199,64.4587255 8.88751349,64.4757059 8.82391177,64.4757059 L4.72479837,64.4757059 C4.52762311,64.4755804 4.36778098,64.3157383 4.36778098,64.118563 C4.36778098,64.0965743 4.36981241,64.0746325 4.37384937,64.0530175 C4.58038323,62.947178 4.79334837,62.2320631 5.01274478,61.9076729 Z"
                    id="右鞋"
                    fill="#001C5E"
                    transform="translate(6.869888, 62.765706) scale(-1, 1) translate(-6.869888, -62.765706) "
                  ></path>
                  <g
                    id="编组-3"
                    transform="translate(8.045637, 46.231304) rotate(2.000000) translate(-8.045637, -46.231304) translate(5.188494, 30.841304)"
                  >
                    <g id="编组-7备份" transform="translate(0.000000, 0.000000)">
                      <mask id="mask-16" fill="white">
                        <use xlinkHref="#path-15"></use>
                      </mask>
                      <use id="形状结合" fill="#2C3E68" xlinkHref="#path-15"></use>
                      <path
                        d="M5.59120105,3.66623878 C5.21024867,3.57123878 4.63882009,3.28623878 3.87691533,2.81123878 C4.25786771,4.52123878 4.64172525,7.84894439 5.02848794,12.7943556 L5.59120105,3.66623878 Z"
                        id="路径-8"
                        fill="#000000"
                        opacity="0.200000003"
                        mask="url(#mask-16)"
                      ></path>
                    </g>
                  </g>
                  <path
                    d="M8.52956295,24.2907059 L13.8915371,24.2907059 C14.1862002,24.2906804 14.469477,24.4044894 14.6822368,24.6083512 C15.6233948,25.510148 16.1702008,26.4119448 16.3226549,27.3137416 C16.493009,28.3214202 16.5801818,29.496036 16.5841733,30.837589 L12.0355112,31.9528304 C11.9464437,31.974668 11.8550714,31.9857059 11.7633658,31.9857059 L10.646357,31.9857059 C10.556527,31.9857059 10.4670103,31.9751149 10.3796604,31.9541522 L5.72703049,30.837589 L5.72703049,30.837589 C5.73890809,29.6334467 5.83997208,28.5046345 6.03022245,27.4511523 C6.20076914,26.5067763 6.76699767,25.5624004 7.72890805,24.6180244 C7.94260866,24.4082443 8.23010402,24.2907059 8.52956295,24.2907059 Z"
                    id="裆部"
                    fill="#2C3E68"
                  ></path>
                  <g id="头" transform="translate(6.914955, 0.000000)">
                    <g
                      id="编组-2"
                      transform="translate(4.158734, 9.759043) rotate(-4.000000) translate(-4.158734, -9.759043) translate(0.658529, 0.220316)"
                    >
                      <path
                        d="M1.85755253,7.96245518 L5.28612396,7.96245518 L5.28612396,17.3631695 C5.28612396,18.3099433 4.5186121,19.0774552 3.57183825,19.0774552 C2.62506439,19.0774552 1.85755253,18.3099433 1.85755253,17.3631695 L1.85755253,7.96245518 L1.85755253,7.96245518 Z"
                        id="脖子备份-4"
                        fill="#FFB3AB"
                      ></path>
                      <path
                        d="M1.28612396,4.65722367 C0.65494139,4.38861917 0.143266818,4.60104799 0.143266818,5.19443267 C0.143266818,5.78781735 0.65494139,6.53745518 1.28612396,6.53745518 L1.28612396,4.65722367 Z"
                        id="路径备份-3"
                        fill="#FFB9A7"
                        transform="translate(0.714695, 5.539955) rotate(-360.000000) translate(-0.714695, -5.539955) "
                      ></path>
                      <path
                        d="M7.00040968,4.65722367 C6.3692271,4.38861917 5.85755253,4.60104799 5.85755253,5.19443267 C5.85755253,5.78781735 6.3692271,6.53745518 7.00040968,6.53745518 L7.00040968,4.65722367 Z"
                        id="路径备份-4"
                        fill="#FFB9A7"
                        transform="translate(6.428981, 5.539955) scale(-1, 1) rotate(360.000000) translate(-6.428981, -5.539955) "
                      ></path>
                      <path
                        d="M3.57183825,9.38745518 C5.14979467,9.38745518 6.4289811,7.34587364 6.4289811,4.82745518 C6.4289811,2.30903672 5.14979467,1.40745518 3.57183825,1.40745518 C1.99388182,1.40745518 0.71469539,2.30903672 0.71469539,4.82745518 C0.71469539,7.34587364 1.99388182,9.38745518 3.57183825,9.38745518 Z"
                        id="蒙版备份-2"
                        fill="#FFCDC0"
                        transform="translate(3.571838, 5.397455) rotate(-360.000000) translate(-3.571838, -5.397455) "
                      ></path>
                      <path
                        d="M6.23785443,5.75555102 C6.53280001,5.28258068 6.7192162,4.77676499 6.83539831,4.2243307 C6.90447814,3.89586307 6.95024106,2.70398891 6.83530533,2.09833194 C6.72036961,1.49267496 6.42144682,0.180764114 4.4001659,0.296217076 C3.07323445,-0.164935409 2.04954307,0.0946400842 1.19242579,0.664603127 C0.335308514,1.23456617 0.0496666736,2.08208134 0.0496666736,3.22581872 C0.0496666736,4.3695561 0.432814083,5.58487653 0.686806239,5.78646623 C0.717051517,5.81208939 0.74384452,5.77215094 0.743842895,5.73499643 C0.738869501,5.59197506 0.559435154,4.3169178 0.971259898,4.58076621 C1.38308464,4.84461463 2.33547318,5.03465632 3.09736074,4.65468927 C3.8592483,4.27472221 5.13891969,2.92930862 5.34315529,3.42434665 C5.80165354,4.84212829 6.01832676,4.69981215 6.14177191,4.8542567 C6.26521707,5.00870125 6.19072372,5.72234543 6.19072439,5.73748992 C6.19072505,5.75263441 6.21173772,5.79743137 6.23785443,5.75555102 Z"
                        id="Fill-25"
                        fill="#001C5E"
                        transform="translate(3.477528, 2.926902) rotate(-1.000000) translate(-3.477528, -2.926902) "
                      ></path>
                    </g>
                    <g
                      id="编组-3"
                      transform="translate(4.240647, 5.602470) rotate(-360.000000) translate(-4.240647, -5.602470) translate(0.812075, 1.612470)"
                    ></g>
                  </g>
                  <path
                    d="M15.7270305,26.0007059 L6.58417335,26.0007059 C5.82226859,19.7005923 5.44131621,16.269814 5.44131621,15.7083711 C5.44131621,14.7748878 5.58157734,13.4016217 5.86209959,11.5885729 C7.27494179,11.1954361 8.50319785,10.9644804 9.54686779,10.8957059 C9.91138165,11.3868959 10.3972003,11.7507059 11.111486,11.7507059 C11.8257717,11.7507059 12.4150103,11.3664296 12.7643361,10.8957059 C13.808006,10.9644804 15.4570454,11.1954361 16.8698876,11.5885729 L16.8698876,11.9453189 C17.0269801,12.9979656 16.6460277,17.6830946 15.7270305,26.0007059 Z"
                    id="路径"
                    fill="#276FF5"
                  ></path>
                  <g id="编组-10" transform="translate(8.968629, 10.325706)">
                    <rect id="矩形" fill="#5797FF" x="1.71428571" y="1.425" width="1.14285714" height="2.85"></rect>
                    <polygon
                      id="路径-23备份"
                      fill="#85B8FF"
                      points="-6.49639073e-14 0.7125 0.571428571 -9.72141118e-14 2.28571429 1.425 0.857142857 2.565"
                    ></polygon>
                    <polygon
                      id="路径-23备份"
                      fill="#85B8FF"
                      transform="translate(3.428571, 1.282500) scale(-1, 1) translate(-3.428571, -1.282500) "
                      points="2.28571429 0.7125 2.85714286 -9.72141118e-14 4.57142857 1.425 3.14285714 2.565"
                    ></polygon>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default IllustrationEmptyImg
