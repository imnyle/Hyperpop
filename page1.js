<script>
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 60 + 'px';
    cursor.style.top = e.clientY - 60 + 'px';
});
</script>