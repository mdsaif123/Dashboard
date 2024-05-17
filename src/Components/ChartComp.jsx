import React from 'react'

const ChartComp = () => {
  return (
    <div>
    <div className="card">
        <h6 className='card-title m-3'>trending in your industry</h6>
        <hr />
        <div className="row">
            <div className="col-md-5">
            <div className='d-flex mx-5'>

           
                <p><svg width="280" height="280" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M280 140C280 217.32 217.32 280 140 280C62.6801 280 0 217.32 0 140C0 62.6801 62.6801 0 140 0C217.32 0 280 62.6801 280 140ZM34.6783 140C34.6783 198.168 81.8325 245.322 140 245.322C198.168 245.322 245.322 198.168 245.322 140C245.322 81.8325 198.168 34.6783 140 34.6783C81.8325 34.6783 34.6783 81.8325 34.6783 140Z" fill="#EAECF0"/>
<path d="M140 0C169.565 3.5256e-07 198.371 9.35969 222.29 26.7376C246.209 44.1156 264.012 68.6195 273.148 96.7376L240.218 107.437C233.341 86.2733 219.941 67.8296 201.938 54.7495C183.935 41.6695 162.253 34.6246 140 34.6246L140 0Z" fill="#071C47"/>
<path d="M273.148 96.7376C281.126 121.293 282.159 147.577 276.132 172.682C270.104 197.788 257.252 220.738 238.995 238.995C220.738 257.252 197.788 270.104 172.682 276.132C147.577 282.159 121.293 281.126 96.7377 273.148L107.411 240.299C125.908 246.309 145.707 247.087 164.619 242.547C183.531 238.006 200.819 228.325 214.572 214.572C228.325 200.819 238.006 183.531 242.547 164.619C247.087 145.707 246.309 125.908 240.299 107.411L273.148 96.7376Z" fill="#2C678E"/>
<path d="M96.7376 273.148C68.6195 264.012 44.1155 246.209 26.7376 222.29L55.0514 201.719C68.0851 219.658 86.4635 233.011 107.553 239.863L96.7376 273.148Z" fill="#E1A739"/>
<path d="M111.648 131.682V128.33L121.523 112.727H124.318V117.5H122.614L115.966 128.034V128.216H129.75V131.682H111.648ZM122.75 136V130.659L122.795 129.159V112.727H126.773V136H122.75ZM141.46 112.409C142.574 112.417 143.657 112.614 144.71 113C145.771 113.379 146.725 114 147.574 114.864C148.422 115.72 149.097 116.867 149.597 118.307C150.097 119.746 150.347 121.527 150.347 123.648C150.354 125.648 150.142 127.436 149.71 129.011C149.286 130.58 148.676 131.905 147.881 132.989C147.085 134.072 146.127 134.898 145.006 135.466C143.884 136.034 142.623 136.318 141.222 136.318C139.752 136.318 138.449 136.03 137.312 135.455C136.184 134.879 135.271 134.091 134.574 133.091C133.877 132.091 133.449 130.947 133.29 129.659H137.438C137.65 130.583 138.081 131.318 138.733 131.864C139.392 132.402 140.222 132.67 141.222 132.67C142.835 132.67 144.078 131.97 144.949 130.568C145.82 129.167 146.256 127.22 146.256 124.727H146.097C145.725 125.394 145.244 125.97 144.653 126.455C144.063 126.932 143.392 127.299 142.642 127.557C141.9 127.814 141.112 127.943 140.278 127.943C138.915 127.943 137.688 127.617 136.597 126.966C135.513 126.314 134.653 125.42 134.017 124.284C133.388 123.148 133.07 121.848 133.062 120.386C133.062 118.871 133.411 117.511 134.108 116.307C134.813 115.095 135.794 114.14 137.051 113.443C138.309 112.739 139.778 112.394 141.46 112.409ZM141.472 115.818C140.653 115.818 139.915 116.019 139.256 116.42C138.604 116.814 138.089 117.352 137.71 118.034C137.339 118.708 137.153 119.462 137.153 120.295C137.161 121.121 137.347 121.871 137.71 122.545C138.081 123.22 138.585 123.754 139.222 124.148C139.866 124.542 140.6 124.739 141.426 124.739C142.04 124.739 142.612 124.621 143.142 124.386C143.672 124.152 144.134 123.826 144.528 123.409C144.93 122.985 145.241 122.504 145.46 121.966C145.688 121.428 145.797 120.86 145.79 120.261C145.79 119.466 145.6 118.731 145.222 118.057C144.85 117.383 144.339 116.841 143.688 116.432C143.044 116.023 142.305 115.818 141.472 115.818ZM166.574 131.636V130.409C166.574 129.508 166.763 128.678 167.142 127.92C167.528 127.163 168.089 126.553 168.824 126.091C169.559 125.629 170.449 125.398 171.494 125.398C172.57 125.398 173.472 125.629 174.199 126.091C174.926 126.545 175.475 127.152 175.847 127.909C176.225 128.667 176.415 129.5 176.415 130.409V131.636C176.415 132.538 176.225 133.367 175.847 134.125C175.468 134.883 174.911 135.492 174.176 135.955C173.449 136.417 172.555 136.648 171.494 136.648C170.434 136.648 169.536 136.417 168.801 135.955C168.066 135.492 167.509 134.883 167.131 134.125C166.759 133.367 166.574 132.538 166.574 131.636ZM169.54 130.409V131.636C169.54 132.235 169.684 132.784 169.972 133.284C170.259 133.784 170.767 134.034 171.494 134.034C172.229 134.034 172.733 133.788 173.006 133.295C173.286 132.795 173.426 132.242 173.426 131.636V130.409C173.426 129.803 173.294 129.25 173.028 128.75C172.763 128.242 172.252 127.989 171.494 127.989C170.782 127.989 170.278 128.242 169.983 128.75C169.688 129.25 169.54 129.803 169.54 130.409ZM154.744 118.318V117.091C154.744 116.182 154.938 115.348 155.324 114.591C155.71 113.833 156.271 113.227 157.006 112.773C157.741 112.311 158.631 112.08 159.676 112.08C160.744 112.08 161.642 112.311 162.369 112.773C163.104 113.227 163.657 113.833 164.028 114.591C164.4 115.348 164.585 116.182 164.585 117.091V118.318C164.585 119.227 164.396 120.061 164.017 120.818C163.646 121.568 163.093 122.17 162.358 122.625C161.623 123.08 160.729 123.307 159.676 123.307C158.608 123.307 157.706 123.08 156.972 122.625C156.244 122.17 155.691 121.564 155.312 120.807C154.934 120.049 154.744 119.22 154.744 118.318ZM157.733 117.091V118.318C157.733 118.924 157.873 119.477 158.153 119.977C158.441 120.47 158.949 120.716 159.676 120.716C160.403 120.716 160.903 120.47 161.176 119.977C161.456 119.477 161.597 118.924 161.597 118.318V117.091C161.597 116.485 161.464 115.932 161.199 115.432C160.934 114.924 160.426 114.67 159.676 114.67C158.956 114.67 158.453 114.924 158.165 115.432C157.877 115.939 157.733 116.492 157.733 117.091ZM156.04 136L172.04 112.727H174.881L158.881 136H156.04Z" fill="#374151"/>
<path d="M97.0824 159L94.2983 148.818H95.5511L97.679 157.111H97.7784L99.946 148.818H101.338L103.506 157.111H103.605L105.733 148.818H106.986L104.202 159H102.929L100.682 150.886H100.602L98.3551 159H97.0824ZM110.754 159.159C110.065 159.159 109.46 158.995 108.94 158.667C108.423 158.339 108.018 157.88 107.727 157.29C107.438 156.7 107.294 156.01 107.294 155.222C107.294 154.426 107.438 153.732 107.727 153.138C108.018 152.545 108.423 152.085 108.94 151.756C109.46 151.428 110.065 151.264 110.754 151.264C111.444 151.264 112.047 151.428 112.564 151.756C113.084 152.085 113.489 152.545 113.777 153.138C114.069 153.732 114.214 154.426 114.214 155.222C114.214 156.01 114.069 156.7 113.777 157.29C113.489 157.88 113.084 158.339 112.564 158.667C112.047 158.995 111.444 159.159 110.754 159.159ZM110.754 158.105C111.278 158.105 111.709 157.971 112.047 157.702C112.385 157.434 112.635 157.081 112.798 156.643C112.96 156.206 113.041 155.732 113.041 155.222C113.041 154.711 112.96 154.236 112.798 153.795C112.635 153.354 112.385 152.998 112.047 152.726C111.709 152.454 111.278 152.318 110.754 152.318C110.231 152.318 109.8 152.454 109.462 152.726C109.124 152.998 108.873 153.354 108.711 153.795C108.549 154.236 108.467 154.711 108.467 155.222C108.467 155.732 108.549 156.206 108.711 156.643C108.873 157.081 109.124 157.434 109.462 157.702C109.8 157.971 110.231 158.105 110.754 158.105ZM119.108 159.159C118.418 159.159 117.814 158.995 117.293 158.667C116.776 158.339 116.372 157.88 116.08 157.29C115.792 156.7 115.648 156.01 115.648 155.222C115.648 154.426 115.792 153.732 116.08 153.138C116.372 152.545 116.776 152.085 117.293 151.756C117.814 151.428 118.418 151.264 119.108 151.264C119.797 151.264 120.4 151.428 120.917 151.756C121.438 152.085 121.842 152.545 122.131 153.138C122.422 153.732 122.568 154.426 122.568 155.222C122.568 156.01 122.422 156.7 122.131 157.29C121.842 157.88 121.438 158.339 120.917 158.667C120.4 158.995 119.797 159.159 119.108 159.159ZM119.108 158.105C119.631 158.105 120.062 157.971 120.4 157.702C120.738 157.434 120.989 157.081 121.151 156.643C121.314 156.206 121.395 155.732 121.395 155.222C121.395 154.711 121.314 154.236 121.151 153.795C120.989 153.354 120.738 152.998 120.4 152.726C120.062 152.454 119.631 152.318 119.108 152.318C118.584 152.318 118.153 152.454 117.815 152.726C117.477 152.998 117.227 153.354 117.064 153.795C116.902 154.236 116.821 154.711 116.821 155.222C116.821 155.732 116.902 156.206 117.064 156.643C117.227 157.081 117.477 157.434 117.815 157.702C118.153 157.971 118.584 158.105 119.108 158.105ZM127.243 159.159C126.606 159.159 126.044 158.998 125.557 158.677C125.07 158.352 124.689 157.895 124.414 157.305C124.139 156.711 124.001 156.01 124.001 155.202C124.001 154.4 124.139 153.704 124.414 153.114C124.689 152.524 125.072 152.068 125.562 151.746C126.053 151.425 126.619 151.264 127.262 151.264C127.76 151.264 128.152 151.347 128.441 151.513C128.732 151.675 128.954 151.861 129.107 152.07C129.263 152.275 129.384 152.444 129.47 152.577H129.569V148.818H130.743V159H129.609V157.827H129.47C129.384 157.966 129.261 158.142 129.102 158.354C128.943 158.562 128.716 158.75 128.421 158.915C128.126 159.078 127.733 159.159 127.243 159.159ZM127.402 158.105C127.872 158.105 128.27 157.982 128.595 157.737C128.92 157.489 129.167 157.146 129.336 156.708C129.505 156.267 129.589 155.759 129.589 155.182C129.589 154.612 129.506 154.113 129.341 153.685C129.175 153.254 128.93 152.92 128.605 152.681C128.28 152.439 127.879 152.318 127.402 152.318C126.904 152.318 126.49 152.446 126.159 152.701C125.831 152.953 125.584 153.296 125.418 153.73C125.256 154.161 125.174 154.645 125.174 155.182C125.174 155.725 125.257 156.219 125.423 156.663C125.592 157.104 125.841 157.455 126.169 157.717C126.5 157.976 126.911 158.105 127.402 158.105ZM136.256 159.159C135.52 159.159 134.886 158.997 134.352 158.672C133.822 158.344 133.412 157.886 133.124 157.3C132.839 156.71 132.696 156.024 132.696 155.241C132.696 154.459 132.839 153.77 133.124 153.173C133.412 152.573 133.813 152.106 134.327 151.771C134.844 151.433 135.447 151.264 136.137 151.264C136.534 151.264 136.927 151.33 137.315 151.463C137.703 151.596 138.056 151.811 138.374 152.109C138.692 152.404 138.946 152.795 139.135 153.283C139.324 153.77 139.418 154.37 139.418 155.082V155.58H133.532V154.565H138.225C138.225 154.134 138.139 153.75 137.966 153.412C137.797 153.074 137.555 152.807 137.24 152.612C136.929 152.416 136.561 152.318 136.137 152.318C135.669 152.318 135.265 152.434 134.924 152.666C134.586 152.895 134.325 153.193 134.143 153.561C133.961 153.929 133.87 154.323 133.87 154.744V155.42C133.87 155.997 133.969 156.486 134.168 156.887C134.37 157.285 134.65 157.588 135.008 157.797C135.366 158.002 135.782 158.105 136.256 158.105C136.564 158.105 136.843 158.062 137.091 157.976C137.343 157.886 137.56 157.754 137.743 157.578C137.925 157.399 138.066 157.177 138.165 156.912L139.299 157.23C139.179 157.615 138.979 157.953 138.697 158.244C138.415 158.533 138.067 158.758 137.653 158.92C137.239 159.08 136.773 159.159 136.256 159.159ZM142.376 154.406V159H141.203V151.364H142.336V152.557H142.436C142.615 152.169 142.886 151.857 143.251 151.622C143.616 151.384 144.086 151.264 144.663 151.264C145.18 151.264 145.632 151.37 146.02 151.582C146.408 151.791 146.71 152.109 146.925 152.537C147.141 152.961 147.248 153.498 147.248 154.148V159H146.075V154.227C146.075 153.627 145.919 153.16 145.608 152.825C145.296 152.487 144.868 152.318 144.325 152.318C143.95 152.318 143.616 152.399 143.321 152.562C143.029 152.724 142.799 152.961 142.63 153.273C142.461 153.584 142.376 153.962 142.376 154.406ZM153.489 159V148.818H159.594V149.912H154.722V153.352H159.137V154.446H154.722V159H153.489ZM162.72 148.818V159H161.547V148.818H162.72ZM167.971 159.159C167.282 159.159 166.677 158.995 166.156 158.667C165.639 158.339 165.235 157.88 164.943 157.29C164.655 156.7 164.511 156.01 164.511 155.222C164.511 154.426 164.655 153.732 164.943 153.138C165.235 152.545 165.639 152.085 166.156 151.756C166.677 151.428 167.282 151.264 167.971 151.264C168.66 151.264 169.264 151.428 169.781 151.756C170.301 152.085 170.705 152.545 170.994 153.138C171.285 153.732 171.431 154.426 171.431 155.222C171.431 156.01 171.285 156.7 170.994 157.29C170.705 157.88 170.301 158.339 169.781 158.667C169.264 158.995 168.66 159.159 167.971 159.159ZM167.971 158.105C168.495 158.105 168.926 157.971 169.264 157.702C169.602 157.434 169.852 157.081 170.014 156.643C170.177 156.206 170.258 155.732 170.258 155.222C170.258 154.711 170.177 154.236 170.014 153.795C169.852 153.354 169.602 152.998 169.264 152.726C168.926 152.454 168.495 152.318 167.971 152.318C167.447 152.318 167.017 152.454 166.678 152.726C166.34 152.998 166.09 153.354 165.928 153.795C165.765 154.236 165.684 154.711 165.684 155.222C165.684 155.732 165.765 156.206 165.928 156.643C166.09 157.081 166.34 157.434 166.678 157.702C167.017 157.971 167.447 158.105 167.971 158.105ZM176.325 159.159C175.635 159.159 175.03 158.995 174.51 158.667C173.993 158.339 173.589 157.88 173.297 157.29C173.009 156.7 172.864 156.01 172.864 155.222C172.864 154.426 173.009 153.732 173.297 153.138C173.589 152.545 173.993 152.085 174.51 151.756C175.03 151.428 175.635 151.264 176.325 151.264C177.014 151.264 177.617 151.428 178.134 151.756C178.655 152.085 179.059 152.545 179.347 153.138C179.639 153.732 179.785 154.426 179.785 155.222C179.785 156.01 179.639 156.7 179.347 157.29C179.059 157.88 178.655 158.339 178.134 158.667C177.617 158.995 177.014 159.159 176.325 159.159ZM176.325 158.105C176.848 158.105 177.279 157.971 177.617 157.702C177.955 157.434 178.205 157.081 178.368 156.643C178.53 156.206 178.612 155.732 178.612 155.222C178.612 154.711 178.53 154.236 178.368 153.795C178.205 153.354 177.955 152.998 177.617 152.726C177.279 152.454 176.848 152.318 176.325 152.318C175.801 152.318 175.37 152.454 175.032 152.726C174.694 152.998 174.444 153.354 174.281 153.795C174.119 154.236 174.038 154.711 174.038 155.222C174.038 155.732 174.119 156.206 174.281 156.643C174.444 157.081 174.694 157.434 175.032 157.702C175.37 157.971 175.801 158.105 176.325 158.105ZM181.576 159V151.364H182.709V152.517H182.789C182.928 152.139 183.18 151.833 183.545 151.597C183.909 151.362 184.32 151.244 184.778 151.244C184.864 151.244 184.971 151.246 185.101 151.249C185.23 151.253 185.328 151.258 185.394 151.264V152.457C185.354 152.447 185.263 152.433 185.121 152.413C184.981 152.389 184.834 152.378 184.678 152.378C184.307 152.378 183.975 152.456 183.684 152.612C183.395 152.764 183.167 152.976 182.998 153.248C182.832 153.516 182.749 153.823 182.749 154.168V159H181.576Z" fill="#374151"/>
</svg>
             </p>
             <div>
                <ul className='mt-5 mx-4'>
                    <li>32%</li>
                    <p>Patern Tiles</p>

                    <li>49%</li>
                    <p>Wooden Floor</p>

                    <li>29%</li>
                    <p>Stone Texture</p>
                </ul>
             </div>

            </div>
            {/* <div className='p-2'>
                <p className=' p-3 chart-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cumque quia eveniet illum temporibus iste? Dicta dolor magnam voluptate voluptatum?</p>
            </div> */}
            </div>
           
        </div>
        
    </div>
   
    </div>
  )
}

export default ChartComp
