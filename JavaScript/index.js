document.getElementById('leaveForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const code = document.getElementById('serviceCode').value.trim();
  const id = document.getElementById('idNumber').value.trim();
  const resultContainer = document.getElementById('result');

  // مسح النتائج السابقة
  resultContainer.innerHTML = '';

  if (code === 'GSL23030900707' && id === '1117471217') {
    resultContainer.innerHTML = `
      <table class="result-table">
        <tr><th>الاسم</th><td>حمود عيسى عبدالله الحربي</td></tr>
        <tr><th>رقم الهوية</th><td>1117471217</td></tr>
        <tr><th>تاريخ إصدار تقرير الإجازة</th><td>2026-01-04</td></tr>
        <tr><th>تاريخ بداية الإجازة</th><td>2026-01-04</td></tr>
        <tr><th>تاريخ نهاية الإجازة</th><td>2026-01-04</td></tr>
        <tr><th>مدة الإجازة</th><td>يوم واحد</td></tr>
        <tr><th>اسم المنشأة</th><td>مركز طويق الغربي</td></tr>
      </table>
    `;
  } else if (code === 'GSL23030675421' && id === '1117471217') {
    resultContainer.innerHTML = `
      <table class="result-table">
        <tr><th>الاسم</th><td>حمود عيسى عبدالله الحربي</td></tr>
        <tr><th>رقم الهوية</th><td>1117471217</td></tr>
        <tr><th>تاريخ إصدار تقرير الإجازة</th><td>2026-01-27</td></tr>
        <tr><th>تاريخ بداية الإجازة</th><td>2026-01-27</td></tr>
        <tr><th>تاريخ نهاية الإجازة</th><td>2026-01-27</td></tr>
        <tr><th>مدة الإجازة</th><td>يوم واحد</td></tr>
        <tr><th>اسم المنشأة</th><td>مركز طويق الغربي</td></tr>
      </table>
    `;
  } else {
    alert('رقم الخدمة أو رقم الهوية غير صحيح');
  }
});



