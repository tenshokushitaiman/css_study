import style from "./block.module.css"
function BoxBlock() {
  return (
    <div>
      <h1>Display property example</h1>

      <h2>Block example:</h2>
      <div className={style["block-container"]}>
        <div className={style["block-element"]}>
          <p>This is a block element. It takes up the entire width of its parent container and starts on a new line.</p>
        </div>
        <div className={style["block-element"]}>
          <p>This is another block element. It also takes up the entire width of its parent container and starts on a new line.</p>
        </div>
      </div>

      <h2>Inline-block example:</h2>
      <div className={style["inline-block-container"]}>
        <div className={style["inline-block-element"]}>
          <p>This is an inline-block element. It only takes up as much width as it needs, but can have a specified height.</p>
        </div>
        <div className={style["inline-block-element"]}>
          <p>This is another inline-block element. It only takes up as much width as it needs, but can have a specified height.</p>
        </div>
      </div>

      <h2>Inline example:</h2>
      <div className={style["inline-container"]}>
        <span className={style["inline-element"]}>This is an inline element. It only takes up as much width as it needs, and does not start on a new line.</span>
        <span className={style["inline-element"]}>This is another inline element. It only takes up as much width as it needs, and does not start on a new line.</span>
      </div>
    </div>
  )
}

function OtherBlock() {
  return (
    <article >
      <section>
        <h1>その他のdisplayの設定値</h1>
        <section>
          <h2>display: table, table-row, table-cell</h2>
          <div className={style.tableContainer}>
            <div className={style.table}>
              <div className={style.row}>
                <div className={style.cell}>1</div>
                <div className={style.cell}>2</div>
              </div>
              <div className={style.row}>
                <div className={style.cell}>1</div>
                <div className={style.cell}>2</div>
              </div>
            </div>
          </div>
        </section>
      </section>

    </article>
  )

}
export {
  BoxBlock
  , OtherBlock
}
