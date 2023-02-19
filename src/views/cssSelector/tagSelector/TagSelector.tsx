import styles from "./TagSelector.module.css"
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
            <p id="myId" className={styles.p}>this is a paragraph.</p>
        </div>
      ) 
}

function CombinationSelector(){
    const h1Style = {
        color: "blue"
        , "font-size": "24px"
    }
    return (
        <article className='combinationContainer'>
            <article>
                <h2 style={h1Style}>p, .highlight</h2>
                <p className={styles.highlight}>pタグでclassName=highlightなのでスタイル適用</p>
                <span className={styles.highlight}>className=highlightなのでスタイル適用</span>
                <p className={styles.highlight}>pタグなのでスタイル適用</p>
                <span className={styles.highlight}>spanタグでclassName=hogeなのでスタイル適用しない</span>
            </article>
            <article>
                <h2>.parent .childItem</h2>
                <div className={styles.parent}>
                    <div className={styles.childItem}>.parentの子要素で className=childNameなのでスタイル適用</div>
                    <div className={styles.childItem}>同上</div>
                    <div className='hoge'>className=hogeなので適用しない</div>
                    <article>
                        <div className={styles.childItem}>孫要素でも適用される</div>
                    </article>
                </div>
                <div className={styles.childItem}>自身が.parent でclassName=childItemなので適用しない</div>
            </article>
            <article>
                <h2>.parent &gt; child</h2>
                <div className={styles.childItem}>
                    <div className={styles.childItem}>parentの直接の子要素でなのでスタイル適用</div>
                    <div className={styles.childItem}>同上</div>
                    <div>
                        <div className={styles.childItem}>parent の下の下の要素なのでスタイルは適用されない </div>
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
