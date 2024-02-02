
import { useState } from 'react';
import './App.css';

function App() {

  let [time1, settime1] = useState('');
  let [time2, settime2] = useState('');
  let [slot, setslot] = useState('');
  let [ans, setans] = useState([]);

  let gap, date, t1 = [], t2 = [], f1, f2, e1, e2, d, h, m, t;
  let ar = [];

  let btn = () => {

    t1 = time1.split(":");
    t2 = time2.split(":");

    f1 = t1[0];
    f2 = t2[0];

    e1 = t1[1];
    e2 = t2[1];

    h = (f2 - f1) * 6;
    m = (e2 - e1) / 10;
    t = h + m;

    if (t1.includes(t1[1])) {
      e1 = t1[1];
    }
    else {
      e1 = 0;
    }

    for (let i = 0; i < t; i++) {
      e1 = parseInt(e1) + 10;
      if (e1 > 60) {
        d = (e1 - 60);
        e1 = d;
        f1++;
      }
      date = f1 + " : " + e1;
      ar.push(date);
    }
    setans(ar)
  }

  return (
    <>
      <div>
        Enter Arrival Time : <input type="text" name="" id="" onChange={(e) => { settime1(e.target.value) }} /> <br></br>
        Enter Departure Time : <input type="text" name="" id="" onChange={(e) => { settime2(e.target.value) }} />
      </div>
      <div>
        <input type="button" value="Click Here" onClick={btn}></input>
      </div>
      <div>
        <table>

          {
            ans.map((ele) => {
              return (
                <tr>
                  <td>{ele}</td>
                </tr>
              )
            })
          }

        </table>
      </div>
    </>
  );
}

export default App;
