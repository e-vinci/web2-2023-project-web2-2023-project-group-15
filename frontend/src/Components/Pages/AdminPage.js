// import { getCartTotal } from "../../utils/shoppingCart";
// eslint-disable-next-line import/no-extraneous-dependencies
import {Chart} from 'chart.js/auto';
import OrderLibrary from '../../Domain/OrderLibrary';

const html = `

<div class="container-fluid">
<!--  Row 1 -->
<div class="row">
  <div class="col-lg-8 d-flex align-items-strech">
    <div class="card border-white w-100">
      <div class="card-body">
        <div class="mb-3 mb-sm-0">
        <h5 class="card-title fw-semibold">Sales Overview</h5>
        </div>
        <div class="d-sm-flex d-block align-items-center justify-content-between mb-9">
          <div>
          <canvas id="myChart" height="400" width="800"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-lg-4">
    <div class="row">
      <div class="col-lg-12">
        <!-- Yearly Breakup -->
        <div class="card border-white overflow-hidden">
          <div class="card-body p-4">
            <h5 class="card-title mb-9 fw-semibold">Yearly Breakup</h5>
            <div class="row align-items-center">
              <div class="col-8">
                <h4 class="fw-semibold mb-3">$36,358</h4>
                <div class="d-flex align-items-center mb-3">
                  <span
                    class="me-1 rounded-circle bg-light-success round-20 d-flex align-items-center justify-content-center">
                    <i class="ti ti-arrow-up-left text-success"></i>
                  </span>
                  <p class="text-dark me-1 fs-3 mb-0">+9%</p>
                  <p class="fs-3 mb-0">last year</p>
                </div>
                <div class="d-flex align-items-center">
                  <div class="me-4">
                    <span class="round-8 bg-primary rounded-circle me-2 d-inline-block"></span>
                    <span class="fs-2">2023</span>
                  </div>
                  <div>
                    <span class="round-8 bg-light-primary rounded-circle me-2 d-inline-block"></span>
                    <span class="fs-2">2023</span>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="d-flex justify-content-center">
                  <div id="breakup"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12">
        <!-- Monthly Earnings -->
        <div class="card border-white">
          <div class="card-body">
            <div class="row alig n-items-start">
              <div class="col-8">
                <h5 class="card-title mb-9 fw-semibold"> Monthly Earnings </h5>
                <h4 class="fw-semibold mb-3">$6,820</h4>
                <div class="d-flex align-items-center pb-1">
                  <span
                    class="me-2 rounded-circle bg-light-danger round-20 d-flex align-items-center justify-content-center">
                    <i class="ti ti-arrow-down-right text-danger"></i>
                  </span>
                  <p class="text-dark me-1 fs-3 mb-0">+9%</p>
                  <p class="fs-3 mb-0">last year</p>
                </div>
              </div>
              <div class="col-4">
                <div class="d-flex justify-content-end">
                  <div
                    class="text-white bg-secondary rounded-circle p-6 d-flex align-items-center justify-content-center">
                    <i class="ti ti-currency-dollar fs-6"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="earning"></div>
        </div>
      </div>
    </div>
  </div>
</div>
  <div class="col-lg-8 d-flex align-items-stretch">
    <div class="card border-white w-100">
      <div class="card-body p-4" >
        <h5 class="card-title fw-semibold mb-4">Recent Transactions</h5>
        <div class="table-responsive">
    <table class="table text-nowrap mb-0 align-middle">
      <thead class="text-dark fs-4">
        <tr>
          <th class="border-bottom-0">
            <h6 class="fw-semibold mb-0">Id</h6>
          </th>
          <th class="border-bottom-0">
            <h6 class="fw-semibold mb-0">Assigned</h6>
          </th>
          <th class="border-bottom-0">
            <h6 class="fw-semibold mb-0">Name</h6>
          </th>
          <th class="border-bottom-0">
            <h6 class="fw-semibold mb-0">Priority</h6>
          </th>
          <th class="border-bottom-0">
            <h6 class="fw-semibold mb-0">Budget</h6>
          </th>
        </tr>
      </thead>
      <tbody id="recentTransactions">
      
      </tbody>
      </table>
      </div>
      </div>
    </div>
  </div>
</div>`;

const AdminPage = async () => {
    const main = document.querySelector('main');
    main.innerHTML = html;
    const orders = await OrderLibrary.prototype.getAllOrder();
    console.log(orders);
    const recentTransactions = document.getElementById('recentTransactions');
    let html2;
    let i = 0;

  while(i < orders.length){
    const idOrder = orders[i].id;
    const firstNameOrder = orders[i].firstName;
    const lastNameOrder = orders[i].lastName;
    const payementMethodOrder = orders[i].payementMethod;

    console.log(firstNameOrder);

     html2 = `
        <tr>
          <td class="border-bottom-0"><h6 class="fw-semibold mb-0">${idOrder}</h6></td>
          <td class="border-bottom-0">
              <h6 class="fw-semibold mb-1">${lastNameOrder}</h6>
              <span class="fw-normal">${firstNameOrder}</span>                          
          </td>
          <td class="border-bottom-0">
            <p class="mb-0 fw-normal">${payementMethodOrder}</p>
          </td>
          <td class="border-bottom-0">
            <div class="d-flex align-items-center gap-2">
              <span class="badge bg-primary rounded-3 fw-semibold">Low</span>
            </div>
          </td>
          <td class="border-bottom-0">
            <h6 class="fw-semibold mb-0 fs-4">$3.9</h6>
          </td>
      </tr>
        
    `;

  i += 1;
  recentTransactions.innerHTML += html2;

  };

  

    (async function() {

      const data = [
        { year: 2010, count: 10 },
        { year: 2011, count: 20 },
        { year: 2012, count: 15 },
        { year: 2013, count: 25 },
        { year: 2014, count: 22 },
        { year: 2015, count: 30 },
        { year: 2016, count: 28 },
      ];
    
      // eslint-disable-next-line no-new
      new Chart(
        document.getElementById('myChart'),
        {
          type: 'bar',
          data: {
            labels: data.map(row => row.year),
            datasets: [
              {
                label: 'Acquisitions by year',
                data: data.map(row => row.count)
              }
            ]
          }
        }
      );
    })();


  };

  
  export default AdminPage;