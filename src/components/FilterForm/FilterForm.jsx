import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import "./FilterForm.css"
import { useRef } from "react";

function FilterForm() {

  let dispatch = useDispatch();

  let countrySelectRef = useRef();
  let metalSelectRef = useRef();
  let qualitySelectRef = useRef();
  let fromPriceRef = useRef();
  let toPriceRef = useRef();
  let fromYearRef = useRef();
  let toYearRef = useRef();

  let selectCountries = [];
  let uniqueSelectCountries = [];

  let selectMetals = [];
  let uniqueSelectMetals = [];

  let selectQuality = [];
  let uniqueSelectQuality = [];

  let { data } = useSelector((state) => {
    return state;
  })

  let { formVisible } = useSelector(
    function (e) {
      return e;
    }
  );

  let selectHandler = () => {
    dispatch({
      type: "FILTER_FORM_CHANGE",
      load: [countrySelectRef.current.value, metalSelectRef.current.value, qualitySelectRef.current.value, fromPriceRef.current.value, toPriceRef.current.value, fromYearRef.current.value, toYearRef.current.value]
    })
  }

  return (formVisible &&
    <div className='FilterForm'>
      <div>
        <form>
          <div className='form-body'>
            <div className='left'>
              <div>
                <label>
                  Issuing country
                </label>
                <select ref={countrySelectRef} onChange={selectHandler}>
                  {
                    data.map((item) => {
                      selectCountries.push(item.tableData["Issuing Country"]);
                      uniqueSelectCountries = [...new Set(selectCountries)];
                    })
                  }
                  {
                    uniqueSelectCountries.map((item) => {
                    return <option key={item.id} value={item}>{item}</option>
                  })}
                </select>
              </div>

              <div>
                <label>
                  Metal
                </label>
                <select ref={metalSelectRef} onChange={selectHandler}>
                  {
                    data.map((item) => {
                      selectMetals.push(item.tableData.Composition);
                      uniqueSelectMetals = [...new Set(selectMetals)];
                    })
                  }
                  {uniqueSelectMetals.map((item) => {
                    return <option key={item.id} value={item}>{item}</option>
                  })}
                </select>
              </div>

              <div>
                <label>
                  Quality of the coin
                </label>
                <select ref={qualitySelectRef} onChange={selectHandler}>
                  {
                    data.map((item) => {
                      selectQuality.push(item.tableData.Quality);
                      uniqueSelectQuality = [...new Set(selectQuality)];
                    })
                  }
                  {uniqueSelectQuality.map((item) => {
                    return <option key={item.id}>{item}</option>
                  })}
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
                  <input type={"number"} ref={fromPriceRef} onChange={selectHandler} />
                  <span> to </span>
                  <input type={"number"} ref={toPriceRef} onChange={selectHandler} />
                </div>

              </div>

              <div className='right-row'>
                <label>
                  Year of issue
                </label>

                <div className='flex'>
                  <span>from </span>
                  <input type={"number"} ref={fromYearRef} onChange={selectHandler} />
                  <span> to </span>
                  <input type={"number"} ref={toYearRef} onChange={selectHandler} />
                </div>

              </div>

            </div>
          </div>
        </form>
      </div>
    </div>
  )

}

export default FilterForm