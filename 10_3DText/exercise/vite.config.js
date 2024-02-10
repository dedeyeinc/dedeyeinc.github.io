export default {
    root: './',
    publicDir: '../static/',
    base: './',
    server:
    {
        host: true, // Open to local network and display URL
        open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env) // Open if it's not a CodeSandbox
    },
    build:
    {
        outDir: 'D:/DEI_depot/dedeyeinc.github.io/ThreeJS', // Output in the dist/ folder
        emptyOutDir: false, // Empty the folder first
        sourcemap: true // Add sourcemap
    },
}