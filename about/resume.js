let html = `<div class="main clearfix">
<aside>
    <div class="photo">
        <img src="./img/header.jpg" alt="photo">
        <h2>房东的小黑</h2>
        <h3>路途虽遥远,将来更美好</h3>
    </div>
    <div class="info">
        <div class="about">
            <h2>
                <span class="tb">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-wode"></use>
                    </svg>
                </span>
                <span class="title">关于我</span>
            </h2>
            <p>
                热爱编程，热爱学习，热爱跑步
            </p>
            <p>
                做个会写Java的running boy
            </p>
        </div>
        <div class="contact">
            <h2>
                <span class="tb">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-contact"></use>
                    </svg>
                </span>
                <span class="title">联系我</span>
            </h2>
            <ul >
                <li>
                    <span class="tb-small">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-dizhi"></use>
                        </svg>
                    </span>
                    <span class="content">浙江省杭州电子科技大学</span>
                </li>
                <li>
                    <span class="tb-small">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-weibiaoti103"></use>
                        </svg>
                    </span>
                    <span class="content">2985075841@qq.com</span>
                </li>
                <li>
                    <span class="tb-small">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-phone"></use>
                        </svg>
                    </span>
                    <span class="content">13777863059</span>
                </li>
                
                
            </ul>
        </div>
    </div>
</aside>
<main>
    <div class="project edu">
        <h2>
            <span class="tb">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-haofangtuoiconfont"></use>
                </svg>
            </span>
            <span class="title">教育经历</span>
        </h2>
        <div class="project-item">
            <h3>本科：山东农业大学(2014-2018)</h3>
            <article>
                <span style="font-size: 16px">计算机科学与技术专业</span>
            </article>   
        </div> 
        <div class="project-item">
            <h3>硕士：杭州电子科技大学(2018- )</h3>
            <article>
                 <span style="font-size: 16px">计算机科学与技术专业</span>
            </article>   
        </div>     
    </div>
</main>
</div>
`

var n =0;

var id =setInterval(()=>{
    n +=5;
    codeHtml.innerHTML = html.substring(0,n);
    main.innerHTML = codeHtml.innerHTML;
    codeHtml.scrollTop= codeHtml.scrollHeight
    if( n >= html.length){
        window.clearInterval(id)
    }
},1)

