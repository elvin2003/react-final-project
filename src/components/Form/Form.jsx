import "./Form.css"

function Form() {

  return (
    <header className='Form'>
      <div>
        <form>
          <div className='form-body'>
            <div className='left'>

              <div>
                <label>
                  Issuing country
                </label>
                <select>
                  <option value={"canada"}>
                    Canada
                  </option>
                  <option value={"azerbaijan"}>
                    Azerbaijan
                  </option>
                </select>
              </div>

              <div>
                <label>
                  Metal
                </label>
                <select>
                  <option value={"gold"}>
                    Gold
                  </option>
                  <option value={"silver"}>
                    Silver
                  </option>
                </select>
              </div>

              <div>
                <label>
                  Quality of the coin
                </label>
                <select>
                  <option value={"proof"}>
                    Proof
                  </option>
                  <option value={"proof2"}>
                    Proof2
                  </option>
                </select>
              </div>

            </div>
            <div className='right'>

              <div className='right-row'>
                <label>
                  Price
                </label>

                <div className='flex'>
                  <span>from </span>
                  <input type={"number"} />
                  <span> to </span>
                  <input type={"number"} />
                </div>

              </div>

              <div className='right-row'>
                <label>
                  Year of issue
                </label>

                <div className='flex'>
                  <span>from </span>
                  <input type={"number"} />
                  <span> to </span>
                  <input type={"number"} />
                </div>

              </div>


            </div>
          </div>
        </form>
      </div>
    </header>
  )

}

export default Form
