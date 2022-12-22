import dataFromJSON from "../../dataMain.json"

let obj = {
  formVisible: false,
  coinList: [],
  data: dataFromJSON,
  searchInputValue: "",
  filterCountry: "",
  filterMetal: "",
  filterQuality: "",
  filterFromYear: "",
  filterToYear: "",
  filterFromPrice: "",
  filterToPrice: ""
}

function reducer(state = obj, action) {
  switch (action.type) {
    case "ADVANCED_FILTER":
      return state = {
        ...state,
        formVisible: action.load
      }
    case "Bullion coins":
      let a = state.data.filter((item) => {
        return item.tableData.category == action.type;
      })
      return state = {
        ...state,
        coinList: a
      }

    case "Exclusive coins":
      let b = state.data.filter((item) => {
        return item.tableData.category == action.type;
      })
      return state = {
        ...state,
        coinList: b
      }

    case "Commemorative coins":
      let c = state.data.filter((item) => {
        return item.tableData.category == action.type;
      })
      return state = {
        ...state,
        coinList: c
      }

    case "FILTER_FORM_CHANGE":
      return state = {
        ...state,
        filterCountry: action.load[0],
        filterMetal: action.load[1],
        filterQuality: action.load[2],
        filterFromPrice: action.load[3],
        filterToPrice: action.load[4],
        filterFromYear: action.load[5],
        filterToYear: action.load[6]
      }

    case "SEARCH":

      if (state.filterFromPrice == "" || state.filterToPrice == "" || state.filterFromYear == "" || state.filterToYear == "") {
        if ((state.filterFromPrice == "" || state.filterToPrice == "") && (state.filterFromYear != "" && state.filterToYear != "")) {
          if (action.load == "" || action.load == undefined) {
            console.log("price and input empty");
            let d1 = state.data.filter((item) => {
              return (
                item.tableData["Issuing Country"] == state.filterCountry &&
                item.tableData.Composition == state.filterMetal &&
                item.tableData.Quality == state.filterQuality &&
                ((~~item.tableData.Year > state.filterFromYear) && (~~item.tableData.Year < state.filterToYear))
              )
            })

            return state = {
              ...state,
              coinList: d1
            }

          } else {
            console.log("only price empty");
            let d2 = state.data.filter((item) => {
              return (
                action.load.toLowerCase() == item.name.toLowerCase() &&
                item.tableData["Issuing Country"] == state.filterCountry &&
                item.tableData.Composition == state.filterMetal &&
                item.tableData.Quality == state.filterQuality &&
                ((~~item.tableData.Year > state.filterFromYear) && (~~item.tableData.Year < state.filterToYear))
              )
            })

            return state = {
              ...state,
              coinList: d2
            }
          }
        }
        if ((state.filterFromPrice != "" && state.filterToPrice != "") && (state.filterFromYear == "" || state.filterToYear == "")) {
          if (action.load == "" || action.load == undefined) {
            console.log("year and input empty");
            let d3 = state.data.filter((item) => {
              return (
                item.tableData["Issuing Country"] == state.filterCountry &&
                item.tableData.Composition == state.filterMetal &&
                item.tableData.Quality == state.filterQuality &&
                ((~~(item.tableData.Price.replace("$", "")) > state.filterFromPrice) && (~~(item.tableData.Price.replace("$", "")) < state.filterToPrice))
              )
            })

            return state = {
              ...state,
              coinList: d3
            }
          } else {
            console.log("only year empty");
            let d4 = state.data.filter((item) => {
              return (
                action.load.toLowerCase() == item.name.toLowerCase() &&
                item.tableData["Issuing Country"] == state.filterCountry &&
                item.tableData.Composition == state.filterMetal &&
                item.tableData.Quality == state.filterQuality &&
                ((~~(item.tableData.Price.replace("$", "")) > state.filterFromPrice) && (~~(item.tableData.Price.replace("$", "")) < state.filterToPrice))
              )
            })

            return state = {
              ...state,
              coinList: d4
            }
          }

        }
        if ((state.filterFromPrice == "" || state.filterToPrice == "") && (state.filterFromYear == "" || state.filterToYear == "")) {
          if (action.load == "" || action.load == undefined) {
            console.log("year, price and input empty");

            if (state.filterCountry == "") {
              state.filterCountry = "CANADA";
            }
            if (state.filterMetal == "") {
              state.filterMetal = "nickel";
            }
            if (state.filterQuality == "") {
              state.filterQuality = "BU";
            }

            let d5 = state.data.filter((item) => {
              return (
                item.tableData["Issuing Country"] == state.filterCountry &&
                item.tableData.Composition == state.filterMetal &&
                item.tableData.Quality == state.filterQuality
              )
            })

            return state = {
              ...state,
              coinList: d5
            }
          } else {
            console.log("year and price empty");
            let d6 = state.data.filter((item) => {
              return (
                action.load.toLowerCase() == item.name.toLowerCase() &&
                item.tableData["Issuing Country"] == state.filterCountry &&
                item.tableData.Composition == state.filterMetal &&
                item.tableData.Quality == state.filterQuality
              )
            })

            return state = {
              ...state,
              coinList: d6
            }
          }
        }
      } else {
        if (action.load == "" || action.load == undefined) {
          console.log("only input empty");
          let d7 = state.data.filter((item) => {
            return (
              item.tableData["Issuing Country"] == state.filterCountry &&
              item.tableData.Composition == state.filterMetal &&
              item.tableData.Quality == state.filterQuality &&
              ((~~item.tableData.Year > state.filterFromYear) && (~~item.tableData.Year < state.filterToYear)) &&
              ((~~(item.tableData.Price.replace("$", "")) > state.filterFromPrice) && (~~(item.tableData.Price.replace("$", "")) < state.filterToPrice))
            )
          })

          return state = {
            ...state,
            coinList: d7
          }
        } else {
          console.log("no 1 empty");
          var d8 = state.data.filter((item) => {
            return (
              action.load.toLowerCase() == item.name.toLowerCase() &&
              item.tableData["Issuing Country"] == state.filterCountry &&
              item.tableData.Composition == state.filterMetal &&
              item.tableData.Quality == state.filterQuality &&
              ((~~(item.tableData.Price.replace("$", "")) > state.filterFromPrice) && (~~(item.tableData.Price.replace("$", "")) < state.filterToPrice)) &&
              ((~~item.tableData.Year > state.filterFromYear) && (~~item.tableData.Year < state.filterToYear))
            )
          })

          return state = {
            ...state,
            coinList: d8
          }
        }
      }

    default:
      return state = {
        ...state,
        coinList: state.data
      }
  }
}
export default reducer