document.addEventListener("DOMContentLoaded", function() {
    const companyInfoBtn = document.querySelector('a[href="#company-info"]');
    const employeeInfoSection = document.getElementById('employee-info');

    companyInfoBtn.addEventListener('click', function(event) {
        event.preventDefault();

        // Menyembunyikan informasi pemilik jika sedang ditampilkan
        const ownerInfoSection = document.getElementById('owner-info');
        ownerInfoSection.style.display = 'none';

        // Menampilkan atau menyembunyikan informasi karyawan
        if (employeeInfoSection.style.display === 'none') {
            employeeInfoSection.style.display = 'block';
        } else {
            employeeInfoSection.style.display = 'none';
        }
    });
});
