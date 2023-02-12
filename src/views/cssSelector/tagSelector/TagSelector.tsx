import '@views/home/Home.css'
import "./TagSelector.css"
function TagSelector() {
  return (
    <div>
        <h1>this is a heading</h1>
        <p>this is a paragraph.</p>
    </div>
  )
}

function IdSelector(){
    return (
        <div>
            <h1 id="myId">this is a heading</h1>
            <p id="myId">this is a paragraph.</p>
        </div>
      ) 
}

function CombinationSelector(){
    return (
        <article className='combinationContainer'>
            <article>
                <h2>p, .highlight</h2>
                <p className='highlight'>pタグでclassName=highlightなのでスタイル適用</p>
                <span className='highlight'>className=highlightなのでスタイル適用</span>
                <p className='hoge'>pタグなのでスタイル適用</p>
                <span className='hoge'>spanタグでclassName=hogeなのでスタイル適用しない</span>
            </article>
            <article>
                <h2>.parent .childItem</h2>
                <div className='parent'>
                    <div className='childItem'>.parentの子要素で className=childNameなのでスタイル適用</div>
                    <div className='childItem'>同上</div>
                    <div className='hoge'>className=hogeなので適用しない</div>
                    <article>
                        <div className='childItem'>孫要素でも適用される</div>
                    </article>
                </div>
                <div className='childItem'>自身が.parent でclassName=childItemなので適用しない</div>
            </article>
            <article>
                <h2>.parent &gt; child</h2>
                <div className='parent'>
                    <div className='child'>parentの直接の子要素でなのでスタイル適用</div>
                    <div className='child'>同上</div>
                    <div>
                        <div className='child'>parent の下の下の要素なのでスタイルは適用されない </div>
                    </div>
                </div>
            </article>
        </article>

    )
}

export {
    TagSelector
    , IdSelector
    , CombinationSelector
}
