const { generateImages } = require('pwa-asset-generator');

(async () => {
  try {
    console.log('🎨 Gerando ícones do PWA...\n');
    
    const { savedImages, htmlMeta, manifestJsonContent } = await generateImages(
      './icon-base.svg', // Imagem de origem
      './icons', // Pasta de destino
      {
        scrape: false,
        background: '#4f46e5',
        splashOnly: false,
        portraitOnly: false,
        landscapeOnly: false,
        log: true,
        iconOnly: true,
        favicon: true,
        maskable: true,
        padding: '10%',
        quality: 100,
        type: 'png'
      }
    );

    console.log('\n✅ Ícones gerados com sucesso!');
    console.log(`📁 Total de arquivos: ${savedImages.length}`);
    console.log('\n📋 Arquivos criados:');
    savedImages.forEach(img => console.log(`   - ${img}`));
    
    console.log('\n🎉 Pronto! Os ícones estão na pasta ./icons');
    console.log('💡 Próximo passo: Execute "npm run dev" para testar o PWA\n');
    
  } catch (error) {
    console.error('❌ Erro ao gerar ícones:', error);
    process.exit(1);
  }
})();
