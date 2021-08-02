/*
Project Name: Lady Rock 
Data: 22/08/2019
*/
var wdw = $(window);
var body = $('body');
var callLady = {
  //function criaCookie(a, b, d) {
    criaCookie: function(a, b, d) {
      var c = new Date;
      //c.setTime(c.getTime() + 3285e6), document.cookie = a + "=" + b + ";expires=" + c.toUTCString()
      c.setTime(c.getTime() + 3285e6), document.cookie = a + "=" + b;
    },
  //function lerCookie(a) {
    lerCookie: function(a) {
      var b = document.cookie.match("(^|;) ?" + a + "=([^;]*)(;|$)");
      return b ? b[2] : null
    },
  //function checkCokie() {
    checkCokie: function() {
      var numLoads = parseInt(callLady.lerCookie('pageLoads'), 10);
      if (isNaN(numLoads) || numLoads <= 0) { 
       callLady.criaCookie('pageLoads', 1);
     } else { 
       callLady.criaCookie('pageLoads', numLoads + 1); 
     }
     if(callLady.lerCookie('pageLoads') > 2) {
       $(".popUpNews").addClass("hide");
     } else {
       $(".popUpNews").addClass("show");
     }
   },
   wrapSearch: function() {
    $(".btn-buscar").wrap("<i class='fa fa-search'></i>");
  },
  reconheceMobile: function() {
    if (wdw.width() > 1024) {
      body.addClass('deskPage');
    } else {
      body.addClass('mobilePage');
    }
  },
  mobileMenu: function() {
    if($("body").hasClass("mobPage")) {
      jQuery(document).on("click", ".listDrop > a", function (e) {
        e.preventDefault();
        $(this).toggleClass("arrowMenu");
        $("+ ul", this).slideToggle();
        //console.log("teste");
      });
      jQuery(document).on("click", ".menu-mobile, .menu-mobile-close", function (e) {
        $(".container-menu > .container-center").toggleClass("active");
      });
      $("#footer-02-01 > span, #footer-02-02 > span, #footer-02-03 > span, #footer-02-04 > span, #footer-02-04 > span, #footer-02-05 > span, #footer-02-06 > span").click(function() {
        $(this).toggleClass("arrowMenu");
        $("+ div", this).slideToggle();
      });
    }
  },
  backToTop: function() {
    $("body").append('<div class="btn btn-default" id="go-top"><i class="fa fa-angle-up"></i></div>');
    $(window).scroll(function(){
      if ($(this).scrollTop() > 300) {
        $("#go-top").removeClass('sr-only');
      } else {
        $("#go-top").addClass("sr-only");
      }
    });
    $("#go-top").click(function(){
      $('html, body').animate({scrollTop : 0},300);
      return false;
    });
  },
  removeComplement: function() {
    $(".helperComplement").remove();
  },
  sliderProducts: function(a) {
    setTimeout(function() {
      $(a).slick({
        dots: false,
        infinite: !0,
        speed: 800,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          }
        }
        ]
      });
    }, 500);
  },
  sliderProducts2: function(a) {
    setTimeout(function() {
      $(a).slick({
        dots: false,
        infinite: !0,
        speed: 800,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
        {
          breakpoint: 1550,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
        ]
      });
    }, 500);
  },
  sliderTamanhos: function(a) {
    if( $(window).width() <= 1024) {
      $(a).slick({
        dots: false,
        infinite: !0,
        speed: 800,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
        ]
      });
    }
  },
  sliderBannersDestaque: function(a) {
    if( $(window).width() <= 1024) {
      $(a).slick({
        dots: false,
        infinite: !0,
        speed: 800,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true
          }
        }
        ]
      });
    }
  },
  sliderDeptos: function(a) {
    if( $(window).width() >= 769 && $(window).width() <= 1024) {
      $(a).slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: true
      });
    }
    if( $(window).width() <= 768) {
      $(a).slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: true
      });
    }
  },
  sliderInstagram: function(a) {
    if( $(window).width() >= 769  && $(window).width() <= 1024) {
     // setTimeout(function() {
      $(a).slick({
        dots: true,
        arrows: true,
            //rows: 2,
            //slidesPerRow: 3
            slidesToShow: 3,
            slidesToScroll: 3
          });
      //}, 1500);
    } else if( $(window).width() <= 768) {
      //setTimeout(function() {
        $(a).slick({
          dots: true,
          arrows: true,
            //rows: 2,
            //slidesPerRow: 2
            slidesToShow: 2,
            slidesToScroll: 2,
          });
      //}, 1500);
    }
  },
  sliderProductsBrands: function(a) {
    setTimeout(function() {
      $(a).slick({
        dots: !1,
        infinite: !0,
        speed: 800,
        arrows: !0,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
        ]
      });
    }, 500);
  },
  sliderDescricoes: function(a) {
    $(a).slick({
      dots: !1,
      infinite: !0,
      speed: 800,
      arrows: !0,
      slidesToShow: 2,
      slidesToScroll: 2,
      variableWidth: true,
      responsive: [
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          variableWidth: false,
        }
      }
      ]
    });
  },
  sliderMosaico: function(a) {
    $(window).load(function() {
      $(a).slick({
        dots: !1,
        infinite: false,
        speed: 800,
        arrows: !0,
        slidesToShow: 1,
        slidesToScroll: 1  
      });
    });
  },
  sliderDiferenciais: function(a) {
    if( $(window).width() >= 768 && $(window).width() < 1025) {
      $(a).slick({
        dots: !1,
        autoplay:true,
        mobileFirst:true,
        autoplaySpeed: 3e3,
        pauseOnHover: !0,
        infinite: !0,
        speed: 1200,
        arrows: !0,
        slidesToShow: 3,
        slidesToScroll: 3
      });
    }
    if( $(window).width() < 768) {
      $(a).slick({
        dots: !1,
        autoplay:true,
        mobileFirst:true,
        autoplaySpeed: 3e3,
        pauseOnHover: !0,
        infinite: !0,
        speed: 1200,
        arrows: !0,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    }
  },
  sliderCategoriasBar: function(a) {
    setTimeout(function() {
      $(a).slick({
        dots: false,
        infinite: false,
        speed: 800,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        }
        ]
      });
    }, 500);
  },
  sliderBrands: function(a) {
    setTimeout(function() {
      $(a).slick({
        dots: false,
        infinite: false,
        speed: 800,
        arrows: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
        ]
      });
    }, 500);
  },
  sliderBanners: function(a) {
    $(a).slick({
      dots: true,
      arrows: true,
      autoplay: !0,
      autoplaySpeed: 5e3,
      pauseOnHover: !0,
      infinite: !0,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1
    });
    //.banner-principal .slick-dots
  },
  instaFeed: function() {
    // generate access token: http://instagram.pixelunion.net/
    var token = '';
    var userid = '';
    var name = '';
    var token = $(".instagram .instagram-token").html();
    var userid = $(".instagram .instagram-id").html();
    var name = $(".instagram .instagram-nome").html();
    var num_photos = 12; 
    var num_photos_aux = num_photos + 1; 
    //console.log("Instagram: "+userid);
    $.ajax({
      //url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', 
      url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token='+token,
      dataType: 'jsonp',
      type: 'GET',
      data: {access_token: token, count: num_photos_aux},
      success: function(data){
        console.log(data);
        /*for( x in data.data ){
          $('#instafeed').append('<a href="'+data.data[x].link+'" target="_blank"><img src="'+data.data[x].images.low_resolution.url+'"></a>'); // data.data[x].images.low_resolution.url - URL of image, 306х306
          // data.data[x].images.thumbnail.url - URL of image 150х150
          // data.data[x].images.standard_resolution.url - URL of image 612х612
          // data.data[x].link - Instagram post URL 
        }*/
        $(".instagram-bar .instagram").html( "<div class='instafeedPhotos'></div>" );
        for (i = 0; i < num_photos.length; i++) { 
          $('.instafeedPhotos').append(`
            <a data-href="${data.data[i].link}" class="insta-photos">
            <img src="${data.data[i].images.low_resolution.url}">
            </a>
            `);       
        }
        //$(".instafeedPhotos").before("<div class='titleInsta'></div>");
        //var larg = $(".instagram > div a").width();
        //console.log("largura: "+larg);
        //$(".instagram > div a").css("height", larg+"px");
        $(".instagram-bar .instagram").css("display", "block");
      },
      complete: function(data) {
        setTimeout(function(){
          callLady.sliderInstagram(".instafeedPhotos");
          var larg = $(".instafeedPhotos a img").width();
          //console.log(larg);
          $(".instafeedPhotos a").css("height", larg+"px");
        }, 200);
      },
      error: function(data){
        console.log(data); 
      }
    });
    //var windowSizeArray = [ "width=200,height=200", "width=300,height=400,scrollbars=yes" ];
    jQuery(document).on("click", ".insta-photos", function (event) {
      var url = $(this).attr("data-href");
      //console.log(url);
      var w = 830;
      var h = 600;
      var left = (screen.width/2)-(w/2);
      var top = (screen.height/2)-(h/2);
      window.open(url, "", 'titlebar=yes, toolbar=0, location=0, directories=0, status=0, menubar=0, resizable=no, width='+w+', height='+h+', top='+top+', left='+left);
    });
  },
  tamanhoVitrine: function(a) {
    $(a).each(function(index) {
    //$(".product-list > .main .shelf li").each(function(index) {
      var idProd = $(".data", this).attr("data-id");
      if (idProd != undefined) {
        var base = "/api/catalog_system/pub/products/variations/";
        var url = base + idProd;
        //console.log(url);
        var $that = $(this);
        $.getJSON(url, function(data) {
          //console.log(data);
          var dimensao = data.dimensions[0];
          //console.log(dimensao);
          if(dimensao){
            //$(".productinstallment", $that).after("<p class='product-size'></p>");
            tam = data.dimensionsMap[dimensao];
            $.each(tam,function(key,val){
              var tamanho = data.skus[key].dimensions[dimensao];
              var disp = data.skus[key].available;
              if(disp == true && tamanho != "NULO"){
                //console.log(tamanho);
                $(".product-size", $that).append("<span>"+tamanho+"</span>");
              }
            });
          }
        });
      }
    });
  },
  mobPage: function() {
    if( $(window).width() < 1025) {
      $("body").addClass("mobPage");
    }
  },
  hideNull: function() {
    $(".search-single-navigator ul li a").each(function(){
      var title = $(this).attr("title");
      title = title.replace(/[^\w\s]/gi, '').replace(/\s/g, "-").toLowerCase();
      $(this).parent("li").attr("data-value",title);
    });
    $(".search-single-navigator ul").each(function(){
      var count = $("li", this).length;
      if(count == 1) {
        var li = $("li", this).attr("data-value");
        if(li == "nulo") {
          $(this).prev().addClass("hideNull");
        }
      }
    });
  },
  filters: function() {
    var count = $(".filtro-ativo").length;
    if(count >= 1) {
      //mostra campo de filtros ativos
      $(".vitrine").before('<div class="applyed-filters"><label>Filtros aplicados por você</label><ul class="list-unstyled"></ul></div>')
      $(".filtro-ativo").each(function(){
        var name = $(this).html();
        var url = $(this).next().attr("href");
        $(".applyed-filters ul").append('<li><a href="'+url+'"><span>'+name+'</span><badge class="badge">x</badge></a></li>')
        $(this).next().html(name);
        $(this).addClass("hideFilter");
      });
    }
    $(".menu-departamento h3.categoria-padrao, .menu-departamento ul.categoria-padrao").remove();
  },
  changeBreadcrumb: function() {
    $(".banner-template").after($(".mobPage .breadcrumb-wrapper"));
    $(".bread-crumb li").not(":first").each(function() {
      var link = $("a", this).attr("href");
      if(link.indexOf('OrderByScoreDESC') == -1) {
        if (link.indexOf('?') > -1) {
          // tem ?
          link = link+"&O=OrderByScoreDESC";
          $("a", this).attr("href", link)
        } else {
          //não tem ?
          link = link+"?O=OrderByScoreDESC";
          $("a", this).attr("href", link);
        }
      }
    });
  },
  changeAbout: function() {
    if( $(window).width() < 768) {
      $(".about-text .col-sm-6").eq(1).after($(".about-text .col-sm-6").first());
    }
  },
  toggleAbout: function() {
    var showChar = 100;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Ler mais...";
    var lesstext = "Ler menos";
    
    $('.about-text > div > p').each(function() {
      var content = $(this).html();
      if(content.length > showChar) {
        var c = content.substr(0, showChar);
        var h = content.substr(showChar, content.length - showChar);
        var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
        $(this).html(html);
      } 
    });
    $(".morelink").click(function(){
      if($(this).hasClass("less")) {
        $(this).removeClass("less");
        $(this).html(moretext);
      } else {
        $(this).addClass("less");
        $(this).html(lesstext);
      }
      $(this).parent().prev().toggle();
      $(this).prev().toggle();
      return false;
    });
  },
  showLogin: function() {
    $(document).one("ajaxStop", function() {
      $("header .ajax-content-loader").each(function(){
        if($("#login", this).length) {
          //console.log("não logado");
          $(this).parent().addClass("loginOff");
          $("body").addClass("loginOff");
        } else {
          //console.log("logado");
          $(this).parent().addClass("loginOn");
          $("body").addClass("loginOn");
        }
      });
    });
  },
  fixBreadcrumb: function() {
    var name = $(".productName").html();
    $(".bread-crumb ul").append("<li class='lastOk'><strong><a href='javascript:void();' title='"+name+"'>"+name+"</a></strong></li>");
    $(".bread-crumb li").not(":first, .lastOk").each(function() {
      var link = $("a", this).attr("href");
      if(link.indexOf('OrderByScoreDESC') == -1) {
        if (link.indexOf('?') > -1) {
          // tem ?
          link = link+"&O=OrderByScoreDESC";
          $("a", this).attr("href", link)
        } else {
          //não tem ?
          link = link+"?O=OrderByScoreDESC";
          $("a", this).attr("href", link);
        }
      }
    });
  },
  produtoIndisponivel: function(product) {
    //console.log("dispon: "+product.available);
    if(product.available == false) {
      $(".btn-group > .btn-group").addClass("indisponivel");
      $(".sku-selector-container > ul").after("<p class='availableMessage'>Este produto está temporariamente indisponível. Selecione um modelo acima para receber notificação de disponibilidade.</p>");
      $(".skuList label").click(function(){
        setTimeout(function(){ 
          $(".availableMessage").remove();
        }, 200);
      });
    } else {
      $(".btn-group > .btn-group").after("<span class='compraSeguraProd'>Compra <b>Segura</b></span>");
    }
  },
  imagensDoProduto: function() {
    //busca imagens do produto
    var allProdSkus = [];
    var allObjImg = [];
    var allObjImgThumb = [];
    var imgSizes = [];
    var imgName, imgPath, theModel;
    var lclSldrPrd = $('.lin01Col01 .imagePlace');
    vtexjs.catalog.getCurrentProductWithVariations().done(function(product){
      //console.log(product);
      //chama compre junto
      //compre_junto__alt(product); 
      callLady.buyTogetherCustom(product);
      callLady.produtoIndisponivel(product);
      allProdSkus = product.skus;
      // incluindo imagem de thumb em variacoes de cor
      $(".item-dimension-Cor > span > input").each(function(i) {
        var corAtualLayout = $(this).attr("data-value");
        console.log("corAtualLayout: "+corAtualLayout);
        $that = $(this);
        $(allProdSkus).each(function(i) {
          var sku = allProdSkus[i].sku;
          var corAtualBusca = allProdSkus[i].dimensions["Cor"];
          if(corAtualLayout == corAtualBusca){
            //console.log("tem cor igual.. sair do looping");
            allObjImgThumb = getSkuData(sku).images;
            corAtualLayout = corAtualLayout.replace(" ", "/");
            //console.log("chama"+i+": "+corAtualBusca);
            //console.log(allObjImgThumb[i][4].Path);
            //console.log(allObjImgThumb[0][1].Path);
            //console.log(".item-dimension-Cor > span > input"+corAtualLayout);
            $($that).next("label").html("<img src="+allObjImgThumb[0][1].Path+" title="+corAtualLayout+" />");
            //console.log(allObjImgThumb);
            return false;
          }
        });
        /*console.log(product);
        allProdSkus = product.skus;
        $(allProdSkus).each(function(i) {
          var sku = allProdSkus[i].sku;
          var corAtual = allProdSkus[i].dimensions["Cor"];
          //console.log(sku+" e "+corAtual);
          if(corAtual == a){
            //console.log("tem cor igual.. sair do looping");
            allObjImg = getSkuData(sku).images;
            return false;
          }
        });*/
      });
      allObjImg = getSkuData(allProdSkus[0].sku).images;
      // console.log(allObjImg);
      $(allObjImg).each(function(ii) {
        imgName = allObjImg[ii][3].Name;
        imgPath = allObjImg[ii][3].Path;
        lclSldrPrd.append(
          '<div><img src="'+imgPath+'" alt="'+imgName+'" class="liImage imgProd imgProd'+ii+'" data-zoom-image="'+imgPath+'" /></div>'
          );
      });
    });
    // verifica se tem video
    /*if($(".value-field").hasClass("Video")) {
      var videoLink = $(".value-field.Video").html();
      $(".thumbnail .lastThumb").css("display", "block").addClass("thumbVideo");
      //console.log("link do video"+videoLink);
      $('.lin01Col01 .imagePlace').append('<div>'+videoLink+'</div>');
    }*/
    // slider nas fotos grandes
    setTimeout(function(){
      $(".imagePlace").slick({
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
          //asNavFor: '.imagePlace > .slick-dots',
          responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          ]
        });
    }, 200);
    // criando area do super zoom
    //$("#product-details-wrapper").prepend("<div id='superZoomBox'></div>");
    // troca dots por imagens
    setTimeout(function(){
      $(".imagePlace .slick-track img").each(function(i){
        var img = $(this).attr("src").replace("-1000-1000", "-100-100");
        $(".imagePlace .slick-dots li:eq("+i+") button").html("<img src='"+img+"' />");
      });
      $(".lin01Col01").animate({opacity:1});
      //$(".imagePlace > .slick-dots").removeClass("slick-dots").addClass("slick-dotss").removeAttr("role");
      //$(".slick-dotss li").removeClass("slick-active").removeAttr("role");
      //$(".slick-dotss button").removeAttr("aria-controls").removeAttr("role").removeAttr("aria-label").removeAttr("tabindex");
    }, 1000);
    // super zoom para desktop
    if (wdw.width() >= 1025) {
      setTimeout(function() {
        $(".imagePlace > .slick-list div.slick-active img").elevateZoom({
          lensSize: 100
        });
      },300);
      // adiciona zoom em outro local
      setTimeout(function(){
        var zW, zH;
        $(".zoomContainer").each(function(){
          zW = $(this).width();
          zH = $(this).height();
          //console.log(zW+','+zH);
          $("#superZoomBox").append($(".zoomWindowContainer", this));
        });
        $('.zoomWindowContainer, .zoomWindowContainer > div').css('width',zW+'px').css('height',zH+'px');
      }, 1500);
    } 
    // chamando novamente super zoom depois de mudar slick
    $(".imagePlace").on('afterChange', function(){
      if (wdw.width() > 1024) {
        $("body").addClass("hideZoom");
          // remove atual
          $.removeData($('img'), 'elevateZoom');
          $('.zoomContainer, .zoomWindowContainer').remove();
          // adiciona zoom nas imagens atuais
          $(".imagePlace > .slick-list div.slick-active img").elevateZoom({
            lensSize: 100
          });
          /*setTimeout(function(){
            $(".zoomContainer").each(function(){
                $("#superZoomBox").append($(".zoomWindowContainer", this));
            });
          }, 200);*/
          setTimeout(function(){$("body").removeClass("hideZoom");}, 1000);
        } 
      });
    // slider nas thumbs (mobile)
    //if ( body.hasClass('mobilePage')) {
      $(document).one("ajaxStop", function() {
        if (wdw.width() > 1024) {
          setTimeout(function(){
            //$(".slick-dotss").slick({
             $(".imagePlace > .slick-dots").slick({
              dots: false,
              infinite: false,
              slidesToShow: 3,
              slidesToScroll: 1,
              vertical: true,
              verticalSwiping: true,
              asNavFor: '.imagePlace',
                //centerMode: true,
                focusOnSelect: true,
                responsive: [
                {
                  breakpoint: 1199,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 1099,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                  }
                }
                ]
              });
           }, 400);
        }
        setTimeout(function(){
          //$(".imagePlace .slick-dots .slick-track li").removeClass("slick-active");
          //$(".lady-produto .slick-dots li").first().addClass("slick-active");
          $(".lady-produto .imagePlace .slick-dots .slick-slide:first-of-type").click();
        }, 1200);
        /*$(".imagePlace > .slick-dots").on('afterChange', function(){
          $(".imagePlace .slick-dots .slick-track li").removeClass("slick-active");
          console.log("afterchange");
        });
        $(".imagePlace > .slick-dots").on('afterChange', function(){
          $(".imagePlace .slick-dots .slick-track li").removeClass("slick-active");
          console.log("afterchange");
        });*/
      });
    //}
    
  },
  fixNull: function() {
    $(".seletorSku > div > ul").each(function() {
      var qtd = $("li.select span input", this).length;
      //console.log(qtd);
      if(qtd == 1) {
        var valor = $("li.select span input", this).attr("data-value");
        if(valor == "NULO" || valor == "Nulo" || valor == "nulo") {
          $(this).addClass("hideNull");
        }
      }
    });
    $(document).click(function(event) {
      if ( !$(event.target).hasClass('active')) {
       $(".select > span").removeClass("active");
           //console.log("chama click");
         }
       });
    $("#product-details-wrapper .seletorSku ul li.select").prepend("<p class='active'>Escolha seu tamanho</p>");
    jQuery(document).on("click", "#product-details-wrapper .seletorSku ul li.select", function (event) {
      $("span", this).toggleClass("active");
      $(".select.skuList").removeClass("active");
      $("p.alertProd").remove();
    });
  },
  updateCart: function() {
    var hrefCart = $(".buy-button").attr("href");
    var resUTL = hrefCart.split("sku=").pop().split("&qty=").shift();
    //console.log("SKU "+resUTL);
    setTimeout(function(){ 
      vtexjs.checkout.getOrderForm().then(function(){
        var item = {
          id: resUTL,
          quantity: 1,
          seller: 1
        };
        vtexjs.checkout.addToCart([item]).done(function(orderForm){
          /*var qtdCart = item.quantity;
          callLady.miniCart();
          $('html, body').animate({scrollTop : 0},300);
          $(".cart-panel").removeClass("empty");
          $(".cart-panel").addClass("active activeTemp");
          setTimeout(function(){
            $(".cart-panel").removeClass("activeTemp");
          }, 5000);*/
          callLady.tempMiniCart();
          //console.log("adicionou.");
        });
      });
    }, 1000);
  },
  toggleProduct: function() {
    //jQuery(document).on("click", ".panel.toggle > .panel-heading", function (event) {
      $(".panel-heading").click(function(){
        $(".panel-collapse").not($(this)).not($(this).next(".panel-collapse")).hide();
        $(".panel-collapse").not($(this)).not($(this).next(".panel-collapse")).removeClass("in");
      //$(".panel-heading").not($(this)).removeClass("collapsed");
      $(".panel-heading").not($(this)).addClass("collapsed");
      $(this).toggleClass("collapsed");
      $(this).next(".panel-collapse").slideToggle();
      $(this).next(".panel-collapse").toggleClass("in");
    });
      setTimeout(function(){
        $(".descPrincipal .panel-heading").trigger("click");
      }, 200);
    },
    shareProduct: function() {
      $("#shareFacebook").click(function(){
        var prod = window.location;
        var name = document.title;
      //console.log(prod+" "+name);
      window.open("http://www.facebook.com/sharer.php?u="+prod+"&p[title]="+name+"",name,'resizable,height=500,width=500');
    });
      $("#sharePinteres").click(function(){
        var prod = window.location;
        var name = document.title;
      //console.log(prod+" "+name);
      window.open("http://pinterest.com/pin/create/button/?url="+prod+"&description="+name+"",name,'resizable,height=500,width=500');
    });
      $("#shareTwitter").click(function(){
        var prod = window.location;
        var name = document.title;
      //console.log(prod+" "+name);
      window.open("http://twitter.com/share?text="+name+"&url="+prod+"",name,'resizable,height=500,width=500');
    });
    },
    guiaMedidas: function() {
      $(".panel.guia .panel-heading").click(function(){
        $(".medidasBt").trigger("click");
      });
    },
    fixModal: function() {
      jQuery(document).on("click", ".modal.fade.in", function (event) {
      //$("modal-dialog", this).preventDefault();
      $(this).find(".close").trigger("click");
    });
      jQuery(document).on("click", ".modal-body", function (event) {
       event.stopPropagation();
     });  
    },
    enviarNewsletter: function() {
      $(".enviarNewsLateral").attr("href", "javascript:void(0);");
      $(".enviarNewsLateral").click(function(){
        var varN = $(".puNome").val();
        var varE = $(".puEmail").val();
        var varNP = $(".puNome");
        var varEP = $(".puEmail");
        function validate(){
          if (validateEmail(varE)) {
            getFromMasterData('NL', 'email='+varE, 'email');
            //enviaDados();
          } else {
            // preencha um e-mail válido
            $(".newsError").remove();
            varEP.before("<label class='error newsError'>Preencha um e-mail válido</label>");
            varEP.addClass("required");
          }
          return false;
        }
        $("footer .boxCampoPu input.required").removeClass("required");
        if(varN == ''){
          $(".newsError").remove();
          varNP.before("<label class='error newsError'>Preencha o campo nome</label>");
          varNP.addClass("required");
        } else if(varE == ''){
          $(".newsError").remove();
          varEP.before("<label class='error newsError'>Preencha o campo e-mail</label>");
          varEP.addClass("required");
        } else if(varE != ''){
          // tudo certo
          validate();
        }
        function getFromMasterData(name, where, fields) {
          var urlProtocol = window.location.protocol;
          var apiUrl = '/api/dataentities/' + name + '/search?_where=' + where + '&_fields=' + fields;
          var response;
          $.ajax({
            "headers": {
              "Accept": "application/vnd.vtex.masterdata.v10.profileSchema+json"
            },
            "url": apiUrl,
            "async": false,
            "crossDomain": true,
            "type": "GET"
          }).success(function (data) {
              //response = data;
              response = data[0];
              console.log(data);
              if (data.length <= 0) {
                  // não existe e-mail
                  enviaDados();
                } else {
                  // e-mail já cadastrado
                  $(".newsError").remove();
                  varEP.before("<label class='error newsError'>E-mail já cadastrado</label>");
                  varEP.addClass("required");
                }
              }).fail(function (data) {
                response = data;
              });
              return response;
            }
        function enviaDados(){
          var datos = {};
          datos.email = varE;
          datos.nome = varN;
          $.ajax({
            url: '/api/dataentities/NL/documents',
            contentType: 'application/json; charset=utf-8',
            crossDomain: true,
            processData: true,
            data: JSON.stringify(datos),
            type: 'POST',
            success: function(result) {
              $(".formsArea").html("<p class='sucesso'>Cadastro realizado com sucesso!</p>");
              $(".enviarNewsLateral").css("display","none");
            },
            error: function(error){
              console.log(error);
            }
          });
        }
      });
    },
    enviarFormularioContato: function() {
      $(".form-contact-phone").mask("(99) 9999-9999?9");
      $(".enviar-form").click(function(){
        var varN = $(".form-contact-nome").val();
        var varE = $(".form-contact-email").val();
        var varM = $(".form-contact-text").val();
        var varT = $(".form-contact-phone").val();
        //var varC = $(".form-contact-cidade").val();
        var varNP = $(".form-contact-nome");
        var varEP = $(".form-contact-email");
        var varMP = $(".form-contact-text");
        var varTP = $(".form-contact-phone");
        //var varCP = $(".form-contact-cidade");
        
        function validate(){
          if (validateEmail(varE)) {
            //getFromMasterData('BV', 'email='+varE, 'email');
            enviaDados();
          } else {
            // preencha um e-mail válido
            $(".newsError").remove();
            varEP.before("<label class='error newsError'>Preencha um e-mail válido</label>");
            varEP.addClass("required");
          }
          return false;
        }
        $(".institucional-content .box-form input.required, .institucional-content .box-form textarea.required").removeClass("required");
        if(varN == ''){
          $(".newsError").remove();
          varNP.before("<label class='error newsError'>Preencha o campo Nome</label>");
          varNP.addClass("required");
        } else if(varE == ''){
          $(".newsError").remove();
          varEP.before("<label class='error newsError'>Preencha o campo e-mail</label>");
          varEP.addClass("required");
        } else if(varT == ''){
          $(".newsError").remove();
          varTP.before("<label class='error newsError'>Preencha o campo telefone</label>");
          varTP.addClass("required");
        } else if(varM == ''){
          $(".newsError").remove();
          varMP.before("<label class='error newsError'>Preencha o campo Mensagem</label>");
          varMP.addClass("required");
        } else if(varE != ''){
          // tudo certo
          validate();
        }
        function enviaDados(){
          var datos = {};
          datos.email = varE;
          datos.nome = varN;
          datos.telefone = varT;
          datos.mensagem = varM;
          $.ajax({
            accept: 'application/vnd.vtex.ds.v10+json',
            contentType: 'application/json; charset=utf-8',
            crossDomain: true,
            data: JSON.stringify(datos),
            type: 'POST',
            url: '/api/dataentities/FC/documents',
            success: function(data) {
              $(".form-contact").html("<p class='sucesso'>Mensagem enviada com sucesso. <br />Em breve retornaremos o contato.</p>");
              console.log("Sucesso!");
            },
            error: function(error){
              console.log(error);
            }
          });
        }
      });
    },
    hashBrands: function() {
      $(".brand-resume li").click(function(){
        if($(this).attr("id") == "link_todas") {
          $(".brandspage .brand-list-indexes, .brandspage .brand-list-indexes li").removeClass("hide");
          $(".local-search input").val('');
        } else {
          $(".brand-list-indexes").addClass("hide");
          var link = $(this).attr("id");
          link = link.replace("link_", "");
          $("#wrapper_"+link).removeClass("hide");
        }
      });
    },
    searchTerm: function() {
      var termo = $("head meta[name='Abstract']").attr("content");
      console.log(termo);
      $(".bread-crumb ul").append("<li class='bold lastSearch'><a class='bold'>Resultados para: "+termo+"</a></li>");
    },
    autoComplete: function() {
      if (!body.hasClass('oq-quickview')) {
        if (body.hasClass('mobPage')) {
          $("body").append("<div class='customListSearch'></div>");
          $('.header.mob .fulltext-search-box').vtexCustomAutoComplete({
            shelfId: '25c8d153-4b87-41ab-ba8b-ddcccf61fe0c',
            appendTo: $('.customListSearch'),
            notFound: function(){ },
            limit: 20
          });
          $(".ui-autocomplete:nth-of-type(2)").next('.customListSearch').andSelf().wrapAll('<div class="wrapSearchMain"/>');
          $(".wrapSearchMain").wrap("<div class='wrapSearch'></div>");
        } else {
          $("body").append("<div class='customListSearch'></div>");
          $('.header.desk .fulltext-search-box').vtexCustomAutoComplete({
            shelfId: '25c8d153-4b87-41ab-ba8b-ddcccf61fe0c',
            appendTo: $('.customListSearch'),
            notFound: function(){ },
            limit: 20
          });
        }
      }
    // ao clicar fora ocultar sugestões
    $(document).click(function(event) {
      if ( !$(event.target).hasClass('customListSearch')) {
       $(".customListSearch").html("");
     }
   });
    //$(".customListSearch").prepend('<div class="scrollC scrollC1"><div class="content"></div></div>');
  },
  fixList: function() {
    console.log($(".can-create").length);
    if($(".can-create").length) {
      console.log("criar lista");
      window.location = "/giftlist/create";
    } else {
      $(".giftlist-table > tbody > tr").each(function() {
        var id = $(".giftlist-body-id", this).html();
        //console.log("Id da lista: "+id);
        $(".giftlist-body-name a", this).attr("href", "/_secure/giftlist/product?id="+id);
        //$(".giftlist-body-name a").trigger("click");
        window.location = "/_secure/giftlist/product?id="+id;
      });
    }
  },
  orderFilters:function() {
    $('.orderBy select > option[value=OrderByPriceASC]').insertAfter('.orderBy select > option[value=OrderByTopSaleDESC]')
  },
  mobFilters:function() {
    $(".mobPage #boxFiltros").before("<span id='btnMobFilter'>Filtrar</span>");
    jQuery(document).on("click", "#btnMobFilter", function (event) {
      $("#boxFiltros").slideToggle();
      $(this).toggleClass("active");
    });
  },
  fixMobBanner: function() {
    $(".mobPage aside.sidebar").before($(".banner-template"));
  }, 
  tempMiniCart: function(){
    callLady.miniCart();
    if($("body").hasClass("mobPage")) {
      //window.location = "/checkout/#/cart";
      $("body").append('<div id="showMobAdd" style="display: none;" class="modal fade" role="dialog" aria-hidden="true"><div class="modal-dialog modal-sm"><div class="modal-content text-center"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div><div class="modal-body"><p>Produto adicionado!</p></div></div></div><a style="display: none;" data-toggle="modal" data-target="#showMobAdd" class="linkMobAdd"></a>');
      $(".linkMobAdd").trigger("click");
      setTimeout(function(){
        $(".customBuy").removeClass("active");
        $("#showMobAdd .close").trigger("click");
        setTimeout(function(){$("#showMobAdd, .linkMobAdd").remove();}, 200);
      }, 4000);
    } else {
      $(".customBuy").removeClass("active");
      $(".top-interaction .cart-panel h2").addClass("show");
      $('html, body').animate({scrollTop : 0},300);
      $("body").append("<div id='whiteLayer'></div>");
      $("#whiteLayer").animate({"width":"100%"}, "fast");
      $(".cart-panel").removeClass("empty");
      $(".cart-panel").addClass("active activeTemp");
      setTimeout(function(){
        $(".cart-panel").removeClass("activeTemp");
        $(".top-interaction .cart-panel h2").removeClass("show");
        $("#whiteLayer").animate({"width":"0px"}, "fast");
      }, 6000);
    }
  },
  removeTags:function() {
    $('.productDescription div').contents().unwrap();
    $('.productDescription br').remove();
  },
  wrapLooks: function() {
    $("#content > .image-set").each(function(){
      if($(this).next().hasClass("shelf")) {
        $(this).next('.shelf').andSelf().wrapAll('<div class="row look-list"/>');
      }
    });
    $("#content > .shelf").each(function(){
      if($(this).next().hasClass("image-set")) {
        $(this).next('.image-set').andSelf().wrapAll('<div class="row look-list"/>');
      }
    });
    $(".mobPage .look-list").each(function(){
      if($("> .shelf", this).next().hasClass("image-set")) {
        $("> .shelf", this).before($("> .image-set", this));
      }
    });
  },
  triggerWishlist: function() {
    $(".btn-wishlist").before("<span id='callWish'>Colocar na Wishlist <i class='fa fa-heart-o'></i></span>");
    jQuery(document).on("click", "#callWish", function (event) {
      if($("body").hasClass("loginOff")) {
        $(".welcome #login").trigger("click");
      } else {
        $(".glis-popup-link.glis-thickbox").trigger("click");
        setTimeout(function(){
          var create = $(".glis-create").length;
          console.log("Valro lista: "+create);
          if(create == 1) {
            //criar lista
            $(".glis-form-name").val("Wishlist");
            $(".glis-submit.glis-submit-new").trigger("click");
            setTimeout(function(){
              $("#TB_closeWindowButton").trigger("click");
            }, 5000);
          } else {
            //já existe lista criada
            $(".glis-submit.glis-submit-list").trigger("click");
            setTimeout(function(){
              $("#TB_closeWindowButton").trigger("click");
            }, 7000);
          }
          
        }, 1000);
        
      }
    });
    
    $(".glis-popup-link.glis-thickbox").click(function() {
      console.log("clicou");
    });
    $(document).on("ready", "#TB_window", function(){
       //console.log("I showed up");   
     });
  },
  brandFiltersForSearch: function() {
    (function(){
      var categories = [];
      var brands = [];
      function slugify(text)
      {
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/[^\w\s-]/g, '-') // remove non-word [a-z0-9_], non-whitespace, non-hyphen characters
          }
          function getBrands(){
            /* Departments on page */
            $('.search-single-navigator h3').each(function(){categories.push($(this).text())});
            var done = categories.length;
            /*
            * Parallel calls
            * This code will never run if there are no categories available on the page.
            */
            $(categories).each(function() {
              var category = this;
              $.ajax({
                url: '/api/catalog_system/pub/facets/search/'+category+'?map=c',
                headers: {
                  'Accept':'application/json',
                  'Content-Type':'application/json'
                }
              }).done(function (data){
                $(data["Brands"]).each(function(){
                  brands.push(this["Name"])
                });
              }).error(function () {
                    /*
                     * Deal with timeouts/errors or just ignore and continue with what you have
                     * Most of the time, one category will contain the same brands as other categories.
                     * Seems like a doable trade-off.
                     */
                     console.log('Timeout/Error occurred. Ignoring...')
                   }).always(function () {
                    done -= 1;
                    if(done ==0) $(document).trigger('brands.ready');
                  })
                 });
          }
          function getBrandTemplate(){
           var  uniqBrands = $.unique(brands);
           var htmlString = '<h3 class="marca"><span></span><a href="#" title="Marca">Marca</a></h3><ul class="marca">';
           $(uniqBrands).each(function(){
             htmlString += '<li data-value="'+slugify(this)+'"><a href="'+new URL(document.URL).pathname+'/'+slugify(this)+'?map=ft,b" title="'+this+'">'+this+'</a></li>';
           });
           return htmlString += '</ul';
         }
         function render(){
          $('.search-single-navigator').append(getBrandTemplate());
        }
        $(document).on("brands.ready",function(){
          render();
        });
        getBrands();
      })();
    },
    brandFiltersForSearchv2: function() {
      (function(){
        var categories = [];
        var brands = [];
        function slugify(text)
        {
          return text.toString().toLowerCase()
                .replace(/\s+/g, '-') // Replace spaces with -
                .replace(/[^\w\s-]/g, '-') // remove non-word [a-z0-9_], non-whitespace, non-hyphen characters
              }
              function getSearchQueryString()
              {
                var url = new URL(document.URL);
                return url.search.includes("spec") ? url.search+',b' : '?map=ft,b';        
              }
              function getSearchUrl(searchTerm){
                return new URL(document.URL).pathname+'/'+slugify(searchTerm)+getSearchQueryString();
              }
              function getBrands()
              {
                /* Departments on page */
                $('.search-single-navigator h3').each(function(){categories.push($(this).text())});
                var done = categories.length;
            /*
            * Parallel calls
            * This code will never run if there are no categories available on the page.
            */
            $(categories).each(function() {
              var category = this;
              $.ajax({
                url: '/api/catalog_system/pub/facets/search/'+category+'?map=c',
                headers: {
                  'Accept':'application/json',
                  'Content-Type':'application/json'
                }
              }).done(function (data){
                $(data["Brands"]).each(function(){
                  brands.push(this["Name"])
                });
              }).error(function () {
                    /*
                     * Deal with timeouts/errors or just ignore and continue with what you have
                     * Most of the time, one category will contain the same brands as other categories.
                     * Seems like a doable trade-off.
                     */
                     console.log('Timeout/Error occurred. Ignoring...')
                   }).always(function () {
                    done -= 1;
                    if(done ==0) $(document).trigger('brands.ready');
                  })
                 });
          }
          function getBrandTemplate()
          {
           var  uniqBrands = $.unique(brands);
           var htmlString = '<h3 class="marca"><span></span><a href="#" title="Marca">Marca</a></h3><ul class="marca">';
           $(uniqBrands).each(function(){
             htmlString += '<li data-value="'+slugify(this)+'"><a href="'+getSearchUrl(this)+'" title="'+this+'">'+this+'</a></li>';
           });
           return htmlString += '</ul';
         }
         function render()
         {
          $('.search-single-navigator').append(getBrandTemplate());
        }
        $(document).on("brands.ready",function(){
          render();
        });
        getBrands();
      })();
    },
    fixFiltersLayout: function() {
      if($("body").hasClass("oq-category")) {
        var qtd = $("#boxFiltros .search-single-navigator > h4").length;
        if(qtd > 1) {
         $("#boxFiltros .search-single-navigator > h4 + ul").addClass("hide");
         $("#boxFiltros .search-single-navigator > h4").addClass("styleLabel01");
       }
     }
   },
   fixBack: function() {
    setTimeout(function(){
      $(".search-single-navigator > h4").each(function() {
        if(!$(this).hasClass("styleLabel01")) {
          var link = $("a", this).attr("href");
          if(link != undefined) {
            console.log("LINK: "+link);
            var linkRemove = link.substr(link.lastIndexOf('/') + 1); 
            var linkParameter = link.substr(link.lastIndexOf('?') + 1);
            link = link.replace(linkRemove, "");
            //console.log(link+"?"+linkParameter);
            link = link+"?"+linkParameter;
            $("a", this).attr("href", link);
          }
        }
      });
    }, 200);
  }, 
  menuPrincipal: function() {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "/api/catalog_system/pub/category/tree/3/",
      "method": "GET"
    }
    $.ajax(settings).done(function (dataMenu) {
        // Inserir a tag do Menu Ex <div class="menu-principal"></div> onde vai ser exibido
        //var menu = $('.menuPrincipal');
        //console.log(dataMenu);
        //$('.todos-deptos').html("<div class='todos-deptos-main'></div>");
        var menu = $('.menu-header');
        var eplusMenu = dataMenu;
        $.each(eplusMenu, function (i, field) {
          var idCategoria = field.id;
          menu.append('<li class="itemMenu cat' + field.id + '"><a href="' + field.url + '" title="' + field.name + '">' + field.name + '</a></li>');
          if (eplusMenu[i].children.length > 0) {
            $('.cat' + field.id).append('<ul class="box-subMenu"><div class="container-center"><div class="subCategoria"></div><div class="banner-menu"></div></div></ul>');
            $('.cat' + field.id).addClass('listDrop');
          }
          $(eplusMenu[i].children).each(function (ii, el) {
            var subCatId = eplusMenu[i].children[ii].id;
            var subCatNome = eplusMenu[i].children[ii].name;
            var subCatUrl = eplusMenu[i].children[ii].url+"";
            $('.cat' + idCategoria).find('.subCategoria').append('<li id="' + subCatId + '"class="subItem sub-index-' + subCatId + '"><a href="' + subCatUrl + '">' + subCatNome + '</a></li>');
                // Verifica se possui o 3 nível e habilita
                if (eplusMenu[i].children[ii].children.length > 0) {
                  $('.sub-index-' + subCatId).append('<ul class="sub_nivel3"></ul>')
                  .addClass('ic-nivel2');
                  $(eplusMenu[i].children[ii].children).each(function (x, els) {
                        //console.log(x);  
                        var sub3_id = eplusMenu[i].children[ii].children[x].id;
                        var sub3_nome = eplusMenu[i].children[ii].children[x].name;
                        var sub3_url = eplusMenu[i].children[ii].children[x].url+"";
                        $('.sub-index-' + subCatId).find('.sub_nivel3').append('<li id="' + sub3_id + '" class="sub_item3 sub-index-' + sub3_id + '"><a href="' + sub3_url + '">' + sub3_nome + '</a></li>');
                        if (eplusMenu[i].children[ii].children[x].children.length > 0) {
                            // Cria o quarto nível 
                            $('.sub-index-' + sub3_id).append('<ul class=".sub_nivel4"></ul>');
                            $(eplusMenu[i].children[ii].children[x].children).each(function (y, elv) {
                              var sub4_id = eplusMenu[i].children[ii].children[x].children[y].id;
                              var sub4_nome = eplusMenu[i].children[ii].children[x].children[y].name;
                              var sub4_url = eplusMenu[i].children[ii].children[x].children[y].url+"";
                              $('.sub-index-' + sub3_id).find('.sub_nivel4').append('<li id="' + sub4_id + ' sub4-index-' + y + '" class="sub_item4"><a href="' + sub4_url + '">' + sub4_nome + '</a></li>');
                            });
                          }
                        });
                }
              });
        });
        $(".menu-header > li").each(function (ii, el) {
          var subCatNome = $("> a", this).attr("title");
          var subCatUrl = $("> a", this).attr("href");
            //subCatUrl = subCatUrl+"?PS=21&O=OrderByReleaseDateDESC";
            $("> ul.box-subMenu .subCategoria", this).append('<li class="subItem verTodos"><a href="' + subCatUrl + '">ver todos</a></li>');
          });
        $(".menu-header").append("<ul class='links-menu'><li class='item01'><a href='/_secure/account#/profile'>Minha Conta</a></li><li class='item02'><a href='https://api.whatsapp.com/send?phone=5511975485353'>Atendimento: <b>(11) 97548-5353</b></a></li></ul>")
      }).done(function(){
      //$("ul.menu-header").append("<li class='promo'><a href='/busca?fq=H:139'>Promoções</a></li>");
      var imagemMenu = [];
      imagemMenu[0] = $(".catRoupas");
      /*imagemMenu[1] = $(".catFeminino");
      imagemMenu[2] = $(".catAcessorios");
      imagemMenu[3] = $(".catChinelo");
      imagemMenu[4] = $(".catEsportivo");
      imagemMenu[5] = $(".catKids");
      imagemMenu[6] = $(".catPromocao");*/
      $(".cat3 .banner-menu").html(imagemMenu[0]);
      /*$(".cat22 .banner-menu").html(imagemMenu[1]);
      $(".cat56 .banner-menu").html(imagemMenu[2]);
      $(".cat65 .banner-menu").html(imagemMenu[3]);
      $(".cat80 .banner-menu").html(imagemMenu[4]);
      $(".cat121 .banner-menu").html(imagemMenu[5]);
      $(".cat168 .banner-menu").html(imagemMenu[6]);*/
      //menu mobile
      $(".menu-header").prepend("<li class='minhaConta mob'><a href='/account'>Minha Conta</a></li>");
      $(".menu-header").after("<span class='menu-mobile-close mob'>Close</span>");
      $('.fx-menu .menu-header > li.cat1').before('<li class="itemMenu"><a href="http://www.ladyrocknews.com.br" title="Lookbook">LOOKBOOK DIGITAL</a></li>');
      $('.fx-menu .menu-header > li.cat41').before('<li class="itemMenu"><a href="http://blogladyrock.com.br/" title="!NROCK">!NROCK</a></li>');
    });
    },  
    menuPrincipalBanners: function() {
      var imagemMenu = [];
      imagemMenu[0] = $(".catTeste").clone();
      imagemMenu[1] = $(".catTeste").clone();
      $(".o-clube .banner-menu").html(imagemMenu[0]);
      $(".vantagens .banner-menu").html(imagemMenu[1]);
      $(".menu-header").after("<span class='menu-mobile-close mob'>Close</span>");
    },
    wrapBtMiniCart: function() {
      $(".cart-panel .card > .btn-success").wrap("<div class='wrapBt'></div>");
    },
    customElements: function() {
      var qtd = $(".resultado-busca-numero .value").html();
      var term;
      if($("body").hasClass("lady-busca")) {
        term = vtxctx.searchTerm; 
        if(term == "") {
          term = "Sua busca";
        }
      //console.log("página de busca");
    } else if($("body").hasClass("lady-departamento")) {
      term = vtxctx.departmentName;
    } else if($("body").hasClass("lady-categoria")) {
      term = vtxctx.categoryName;
    } else if($("body").hasClass("lady-brand")) {
      term = $(".bread-crumb li.last a").attr("title");
    } 
    //$(".boxFiltroOrder").before("<p class='msgCategory'>Foram encontrados <b>"+qtd+"</b> resultados para <b>"+term+"</b></p>");
    $(".optionList").before("<div class='leftInfos'><h1 class='msgCategory'>"+term+"</h1><p class='msgQtd'>Foram encontrados <b>"+qtd+"</b> produtos</p></div>");
    
    jQuery(document).on("click", ".viewGrid4", function (event) {
      $(".shelf > .shelf").addClass("grid4");
      $(this).addClass("active");
      $(".viewGrid3").removeClass("active");
    });
    jQuery(document).on("click", ".viewGrid3", function (event) {
      $(".shelf > .shelf").removeClass("grid4");
      $(this).addClass("active");
      $(".viewGrid4").removeClass("active");
    });
    $(".viewGrid3").addClass("active");
  },
  categoryFiltros: function() {
    $("#boxFiltros .menu-departamento h3").each(function(){
      var classe = $(this).attr("class");
      $(this).next("ul").andSelf().wrapAll('<span class="listFilter listFilterH3 '+classe+'" />');
      $(this).parent().prepend("<div class='btFilter'></div>");
    });
    if(!$("body").hasClass("lady-departamento")) {
      $("#boxFiltros .menu-departamento h4").each(function(){
        var classe = $(this).attr("class");
        $(this).next("ul").andSelf().wrapAll('<span class="listFilter listFilterH4 '+classe+'" />');
        $(this).parent().prepend("<div class='btFilter'></div>");
      });
    }
    
    $("#boxFiltros .menu-departamento h5").each(function(){
      var classe = $(this).attr("class");
      $(this).next("ul").andSelf().wrapAll('<span class="listFilter listFilterH5 '+classe+'" />');
      $(this).parent().prepend("<div class='btFilter'></div>");
    });
    $("#boxFiltros ul").each(function(){
      var tam = $(this).html().length;
      //console.log("tamanho: "+tam);
      if(tam == 0 || tam == 1){
        $(this).addClass("noUl");
        $(this).parent().addClass("removePlus");
        $(this).prev().prev(".btFilter").remove();
      }
    });
    $(".listFilter").each(function(){
      var tam = $("ul", this).length;
      //console.log("tamanho: "+tam);
      if(tam == 0){
        $(this).addClass("removePlus");
        $(this).children(".btFilter").remove();
      }
    });
    if($("body").hasClass("lady-departamento")) {
      if($("#boxFiltros .search-single-navigator > h4").length > 0) {
        $("#boxFiltros .search-single-navigator").prepend("<span class='listFilter listFilterH4 Hide HidePreco'><div class='btFilter'></div><h4>Categorias</h4><ul></ul></span>");
        $("#boxFiltros .search-single-navigator > h4").each(function(){
          var classe = $(this).attr("class");
          var filtro = $(this).html();
          $(".listFilterH4 ul").prepend("<li>"+filtro+"</li>")
          //$(this).next("ul").andSelf().wrapAll('<span class="listFilter listFilterH4 '+classe+'" />');
          //$(this).parent().prepend("<div class='btFilter'></div>");
        });
      }
    }
    jQuery(document).on("click", ".btFilter", function (event) {
      $(this).next().next("ul").slideToggle();
      $(this).toggleClass("active");
    });
  },
  orderCustom:function() {
    // Cria select e dispara o evento para o controle padrão 
    var selectOrder = $('.orderBy select').first(); 
    $('.contOrdenar li a').each(function () { 
      var liLink = $(this).attr('data-href'); 
      $(this).click(function (e) { 
        e.preventDefault(); 
        selectOrder.val(liLink);
        selectOrder.trigger('change'); 
      }); 
    });
    jQuery(document).on("click", ".boxFiltroOrder > h3", function (event) {
      $(".boxFiltroOrder > ul").slideToggle();
      $(this).toggleClass("active");
    });
  }, 
  discountPercentage: function() {
    if($(".skuListPrice").length){
      var listPrice = limpa_valor_dinheiro($(".skuListPrice").html());
      //console.log("limpa valor dinheiro DE: "+listPrice);
      var skuBestPrice = limpa_valor_dinheiro($(".skuBestPrice").html());
      //console.log("limpa valor dinheiro POR: "+skuBestPrice);
      var desconto = parseInt((skuBestPrice * 100)/listPrice - 100);
      //console.log(parseInt(desconto - 100));
      $("#flagDiscount").html(desconto+"%<br />OFF");
    } else {
      $("#flagDiscount").css("display", "none");
    }
  },
  fixFrete: function() {
    $(".shipping-value").trigger("click");
    setTimeout(function() {
     $("#btnFreteSimulacao").attr("value", "calcular");
     $("#txtCep").attr("placeholder", "Digite seu CEP");
   }, 500);
    $(document).ready(function() {
      $(document).on( 'focus', '#txtCep', function(){
        $(this).attr('autocomplete', 'nope');
      });
    });
    //troca texto da caixa de CEP
    $(window).load(function(){
      $("#txtCep").attr("placeholder", "00000-000");
      $("#txtCep").attr('autocomplete', 'nope');
      $("#txtCep").attr('autocomplete', 'off');
        //retorna seleção de campo cep para inicio
        $('#txtCep').on('focus click', function() {
          $(this)[0].setSelectionRange(0, 0);
        });            
      });
  },
  menuInstMobile: function() {
    if($("body").hasClass("mobPage")){
      $("ul.menuLat").before("<p class='btMenuIns'>navegue</p>");
      jQuery(document).on("click", ".btMenuIns", function (e) {
        $("+ ul", this).slideToggle();
        $(this).toggleClass("active");
      });
    }
  },
  categoryFiltrosMob: function() {
    if($("body").hasClass("mobPage")){
      $("#boxFiltros").before("<p class='btMenuFiltros'>Filtro</p>");
      jQuery(document).on("click", ".btMenuFiltros", function (e) {
        $("#boxFiltros").slideToggle();
        $(this).toggleClass("active");
      });
    }
  },
  infinityScroll: function() {
    var quantidade = $(".shelf > .shelf:last > ul > li").length;
    if(quantidade < 15){
     $(".loadProd").addClass('noResults').text("Não existem mais resultados");
   }
   $(".shelf[id*=ResultItems]").QD_infinityScroll({
    lastShelf: ">div:last",
    callback: function () {
      callLady.removeComplement();
      callLady.flagPreco();
      var quantidade = $(".shelf > .shelf:last > ul > li").length;
      console.log("Quantidade: "+quantidade);
      if(quantidade < 15){
       $(".loadProd").addClass('noResults').text("Não existem mais resultados");
     }
     $(".loadProd").removeClass("hide");
   },
   paginate: function (moreResults) {
    $(".loadProd").click(function() {
      moreResults();
          /*setTimeout(function(){
            if(!$("#collections").hasClass("noMoreResults")){
              setTimeout(function(){
                  callLady.miniThumbs();
              },500);
            }
          },1000);*/
        });
  }
});
 },
 readMore: function() {
  $(".productDescription").after("<span class='readMore'>leia mais sobre isso</span>");
  jQuery(document).on("click", ".readMore", function (e) {
    var aTag = $("#caracteristicas");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
  });
},
lazyLoad: function() {
    //lazyload preparer
    var lazyObj = {
      imgWidth    : '44',
      imgHeight   : '44',
      prepareTags : function(){
        jQuery(".shelf:last-of-type li").not('.lazed').each(function(){
                //var lazyProdId = jQuery(this).data('lazy');
                var link = $(".productImage", this).attr("href");
                var lazyProdId = $(".data", this).attr("data-id");
                $(".data", this).append("<a href='"+link+"' class='thumbsMin'></a>");
                var ajax = new XMLHttpRequest();
                ajax.open("GET", "/api/catalog_system/pub/products/variations/"+lazyProdId, true);
                //ajax.open("GET", "/api/catalog_system/pub/products/search/?fq=productId:"+lazyProdId, true);
                ajax.send();
                var that = this;
                //var $that = $(this);
                ajax.onreadystatechange = function() {
                  if (ajax.readyState == 4 && ajax.status == 200) {                                              
                    var data = JSON.parse(ajax.responseText);
                        //console.log(data);
                        if(data.dimensionsMap['Cor'].length > 1){
                          //var allProdSkus = [];
                          var allProdSkus = data.skus;
                          //console.log("corAtualLayout: "+corAtualLayout);
                          //$that = $(this);
                          var tipoCores = data.dimensionsMap['Cor'];
                          $.each(tipoCores,function(key,val){
                            //var corAtualLayout = data.skus;
                            var corAtualLayout = data.dimensionsMap['Cor'][key];
                            $(allProdSkus).each(function(i) {
                              var sku = allProdSkus[i].sku;
                              var corAtualBusca = allProdSkus[i].dimensions["Cor"];
                              if(corAtualLayout == corAtualBusca){
                                //console.log("tem cor igual.. sair do looping");
                                //var imgThumb = getSkuData(sku).images[0][2].Path;
                                var imgThumb = data.skus[i].image;
                                imgThumb = imgThumb.replace("-400-400", "-44-44");
                                //var imgGrande = getSkuData(sku).images[0][0].Path;
                                //var hoverId = getSkuData(sku).images[0][0].IdArchive;
                                //$($that).next("label").html("<img src="+allObjImgThumb[0][1].Path+" title="+corAtualLayout+" />");
                                
                                $(".thumbsMin", that).append("<span><img src='"+imgThumb+" />'</span>");
                                //$(".productImage", $that).prepend($("<img class='imageProdHover' data-id='cor-"+hoverId+"' src='"+imgGrande+"' />"));
                                return false;
                              }
                            });
                          });
                        }
                        //jQuery(that).attr('src',imgUrl);
                        jQuery(that).addClass('lazed');
                      }
                    }
                  });
      }
    }
    lazyObj.prepareTags();
    jQuery(document).ajaxComplete(function(event, xhr, settings) {   
     if(settings.url.indexOf('/buscapagina?') >= 0){
      lazyObj.prepareTags();
    }
  });
    jQuery(window).on('load',function(){
      lazyObj.prepareTags();
    });
  },
  desconto_preco_a_vista: function() {
    var preco_cheio = $('.skuBestPrice').text();
    preco_cheio = (parseFloat(preco_cheio.replace('R$ ','').replace('.','').replace(',','')))*0.01;//   R$ 1.799,00
    var preco_alterado = ((preco_cheio*0.95).toFixed(2)).toString().replace('.',',');
    if(preco_alterado.length > 6){
      var temp = preco_alterado.split('');
      temp.splice(-6, 0, '.');
      preco_alterado = 'R$ '+temp.join('');
    }
    $('.preco-a-vista .skuPrice').text(preco_alterado);
    // console.log(preco_alterado);
  },
  campoProduto: function() {
    //via controle 
    //tabela nutricional
    $("#caracteristicas").before("<div class='tabelasMain'><div class='tabelasTitle'></div><div class='tabelasCentral'><div class='tabelaNutricional active'></div><div class='tabelaAminograma'></div></div></div>")
    if($("#caracteristicas .Valores-Nutricionais").length) {
      $("#caracteristicas .Valores-Nutricionais tr").each(function(){
        var valor = $(".value-field", this).html().toString();
        if(valor.indexOf('??') > -1) {
          valor = valor.split("??");
          $(".value-field", this).html(valor[0])
          $(this).append("<td class='value-complement'>"+valor[1]+"</td>");
          //console.log("Valor: "+valor[0]);
        } else {
          $(this).append("<td class='value-complement'></td>");
        }
      });
      $(".tabelaNutricional").append($("#caracteristicas .Valores-Nutricionais"));
      $(".tabelasTitle").append("<span class='tableaNutriBt active'>Valores Nutricionais</span>");
      if($(".value-field.Informacao-Nutricional-Tabela-Nutricional").length){
        var texto = $(".value-field.Informacao-Nutricional-Tabela-Nutricional").html();
        $(".tabelaNutricional").append("<p><b>Informação Nutricional:</b>"+texto+"</p>");
      }
    }
    //tabela aminograma
    if($("#caracteristicas .Aminograma").length) {
      $("#caracteristicas .Aminograma tr").each(function(){
        var valor = $(".value-field", this).html().toString();
        if(valor.indexOf('??') > -1) {
          valor = valor.split("??");
          $(".value-field", this).html(valor[0])
          $(this).append("<td class='value-complement'>"+valor[1]+"</td>");
          //console.log("Valor: "+valor[0]);
        } else {
          $(this).append("<td class='value-complement'></td>");
        }
      });
      $(".tabelaAminograma").append($("#caracteristicas .Aminograma"));
      $(".tabelasTitle").append("<span class='tableaAminoBt'>Aminograma</span>");
      if($(".value-field.Informacao-Nutricional-Tabela-Nutricional").length){
        var texto = $(".value-field.Informacao-Nutricional-Tabela-Aminograma").html();
        $(".tabelaAminograma").append("<p><b>Informação Nutricional:</b>"+texto+"</p>");
      }
    }
    jQuery(document).on("click", ".tableaNutriBt", function () {
      $(".tableaAminoBt, .tabelaAminograma").removeClass("active");
      $(".tableaNutriBt, .tabelaNutricional ").addClass("active");
    });
    jQuery(document).on("click", ".tableaAminoBt", function () {
      $(".tableaNutriBt, .tabelaNutricional ").removeClass("active");
      $(".tableaAminoBt, .tabelaAminograma").addClass("active");
    });
    //via API
    //esconde elementos para depois ativar os que possuem conteudo
    /*$(".prod-beneficios,\
      .prod-importante,\
      .prod-caracteristicas,\
      .prod-laudo,\
      .prod-retricao,\
      .prod-recomendacao").addClass("hideElement"); 
      $(".prod-dica").addClass("hide");*/
      var id = $("#___rc-p-id").attr("value");
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "/api/catalog_system/pvt/products/"+id+"/specification",
        "method": "GET"
      }
      $.ajax(settings).done(function (data) {
        console.log(data);
        var conteudo = data;
        $.each(conteudo, function (i, field) {
          var id = field.Id;         
          switch (id) {
            case 20: //beneficios
            if(field.Value != "") {
              $(".prod-beneficios").removeClass("hideElement"); 
              $(".prod-beneficios").html("<span>Benefícios do produto: </span><p>"+field.Value+"</p>");
            }
            break;
            case 23: //importante
            if(field.Value != "") {
              $(".prod-importante").removeClass("hideElement"); 
              $(".prod-importante").html("<span>Importante</span><p>"+field.Value+"</p>");
            }
            break;
            case 30: //selos
            if(field.Value != "") {
              $(".prod-caracteristicas").removeClass("hideElement"); 
              $(".prod-caracteristicas").html("<p>Características do Produto</p><ul></ul>"); 
              for (i = 0; i < field.Value.length; i++) { 
                var str = field.Value[i];
                str = str.toString().replace(/[^a-zA-Z ]/g, "");
                str = str.replace(/\s/g, "-").toLowerCase();
                    //console.log("posição "+i+" e nome:"+field.Value[i]+ " e class: "+str);
                    $(".prod-caracteristicas ul").append("<span class='"+str+"'>"+field.Value[i]+"</span>"); 
                  }
                }
                break;
            case 22: //laudo link
            if(field.Value != "") {
              $(".prod-laudo").removeClass("hideElement"); 
              $(".prod-laudo").html("<h3>Laudo Técnico</h3><a href='"+field.Value+"'>Clique aqui para fazer o donwload do laudo técnico</a>");
            }
            break;
            case 24: //ingredientes
            if(field.Value != "") {
              $(".prod-ingredientes").removeClass("hideElement"); 
              $(".prod-ingredientes").html("<h4>Ingredientes</h4><p>"+field.Value+"</p>");
            }
            break;
            case 25: //retrição alimentar
            if(field.Value != "") {
              $(".prod-retricao").removeClass("hideElement"); 
              $(".prod-retricao").html("<h4>Restrição Alimentar</h4><p>"+field.Value+"</p>");
            }
            break;
            case 26: //recomendação de consumo
            if(field.Value != "") {
              $(".prod-recomendacao").removeClass("hideElement"); 
              $(".prod-recomendacao").html("<h4>Recomendação de Consumo</h4><p>"+field.Value+"</p>");
            }
            break;
            default:
                //$(".prod-pontuacao").remove();
                break;
              }
            });
      }).done(function(){
      //adaptação de layout
      $(".hideElement").remove();
    });
    },
    slideToggleDescription: function() {
      $(".prod-descr > h3").click(function(){
        $(".productDescription").slideToggle();
        $(this).toggleClass("active");
      });
    },
    customBuyShelf: function() {
      //block letters
      $(".showValue").keydown(function (e) {
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
          (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
          (e.keyCode >= 35 && e.keyCode <= 40)) {
         return;
     }
     if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  });
      //$("body").append('<div class="storeCartMessage"></div>');
      jQuery(document).on("click", ".btComprarVitrine", function (event) {
        event.preventDefault();
        var qtd = $(this).attr("data-qtd-prod");
        var idProd = $(this).attr("data-id-sku");
        setTimeout(function(){ 
          vtexjs.checkout.getOrderForm().then(function(){
            item = {
              id: idProd,
              quantity: qtd,
              seller: 1
            };
            vtexjs.checkout.addToCart([item]).done(function(orderForm){
                      //calculando total de itens
                      var qtd = orderForm.items.length;
                      var i; 
                      var total = 0;
                      for (i = 0; i < qtd; i++) { 
                        total = total + orderForm.items[i].quantity;
                      }
                      $(".cart-link > span").html(total);
                      //console.log("total: "+total);
                      callLady.miniCart();
                      $(".card.card-default").addClass("active").removeClass("empty");
                      $(".card.card-default > h2").html("Produto adicionado!");
                      setTimeout(function(){
                        $(".card.card-default").removeClass("active")
                      }, 6000);
                    });
          });
        });
      });
      jQuery(document).on("click", ".closeCartMsg", function (event) {
        $(".storeCartMessage").hide();
      });
      jQuery(document).on( "click", ".buyNoVar .addMais", function(event) {
        var atual = parseInt($(this).parent().next(".showValue").val());
        atual = atual + 1;
        $(this).parent().parent().next(".btComprarVitrine").attr("data-qtd-prod", atual);
        $(this).parent().next(".showValue").val(atual);
      });
      jQuery(document).on( "click", ".buyNoVar .addMenos", function(event) {
        var atual = parseInt($(this).parent().next(".showValue").val());
        if (atual == 1) {
          $(this).parent().parent().next(".btComprarVitrine").attr("data-qtd-prod", 1);
          $(this).parent().next(".showValue").val(1);
        } else {
          atual = atual - 1;
          $(this).parent().parent().next(".btComprarVitrine").attr("data-qtd-prod", atual);
          $(this).parent().next(".showValue").val(atual);
        }
      });
    },
    clickNewsTopo: function() {
      $(document).on('click', '.fx-right .item01 a, .lady-busca-vazia .busca-vazia-main > div p span', function (event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: $($('.newsCapBox')).offset().top
        }, 500);
      });
    },
    filtroLojas: function() {
      $("#boxLojasFiltros").after("<div id='msgAlert'></div>")
      $('#lojasFiltroType01').on('change', function() {
        $(".box-lojas").addClass("active");
        $("#msgAlert").html("");
        $("#cidade").prop('disabled', true);
      });
      $("#lojasFiltroType01").trigger("click");
    // ver por cidade
    $('#lojasFiltroType02').on('change', function() {
      $("#cidade").prop('disabled', false);
      $(".box-lojas").removeClass("active");
      $("#msgAlert").html("Selecione uma cidade");
    });
    // selecionando cidade
    $('#cidade').on('change', function() {
      $("#msgAlert").html("");
      var cidade = $("#cidade").attr("value");
      var tipoValue = $('input[type=radio][name=lojasFiltroType]:checked').attr('id');
      console.log("Estado: "+cidade);
      $(".box-lojas").each(function(){
        $(this).removeClass("active");
        if($(this).attr("data-cidade") == cidade) {
          $(this).addClass("active");
        } 
      });
      if(!$(".box-lojas").hasClass("active")){
        $("#msgAlert").html("<p>Sem resultados =(</p>");
      }
    });
  },
  flagPreco: function() {
   $('.shelf li').before(function(){
    var precoDe = $('.flagPreco', this).text(); 
    var precoDe2 = parseInt(precoDe).toFixed(0);
    $('.flagPreco', this).after('<div class="etiquetaValorDesconto">'+precoDe2+'%<br />OFF</div>');
    $('.flagPreco', this).remove();
  });
 },
 buyTogetherCustom: function(prod) {
  var skusPrincipais = prod.skus;
  var obj_principal = [];
  var produto_principal = [];
  var ids_acessorios = [];
    var produtos_loja = [];//arr
    var itens_atuais = [];
    var count_code = 0;
    var loja = $('.compre_junto');
    var controle_produtos = [];//todos os produtos vao estar neste array
    
    if (loja.find('.vitrine li').length > 0) {
      loja.find('.vitrine').addClass('vitrine--custom_loja_original');
      loja.find('.vitrine h2').remove();
      loja.find('fieldset').remove();
      loja.find('.box-preco-atualizado').remove();
      loja.find('.vitrine ul li').each(function(i,el){
        var $this = $(this);
        $this.find('.box-item__buttons').replaceWith('<ul class="box-item__select"></ul>');
        if ($this.hasClass('helperComplement')){
          $this.remove();
        } else {
          ids_acessorios.push($this.find('.box-item').attr('data-id'));
        }
      });
      loja.find('.produto_descricao__cont').prepend('<div class="vitrine vitrine--loja vitrine--custom_loja"><ul></ul></div>');
      teste(ids_acessorios,count_code);
      $(skusPrincipais).each(function(i,el){
        //if(el.bestPrice !== 999987600) {
          produto_principal[i] = new item_vitrine (
            'javascript:void(0)',
            prod.productId,
            el.sku,
            el.image,
            el.skuname,
            el.listPrice,
            el.bestPrice,
            el.installments,
            el.installmentsValue,
            el.available,
            el.dimensions.Tamanho
            );
        //}
      });
      for (idx = 0; idx < produto_principal.length; idx++) {
        obj_principal.push({prodId: produto_principal[idx].prodId, index: idx, item:produto_principal[idx]});
      }  
      loja.find('.vitrine--custom_loja ul').append(loja_produto_principal(obj_principal,1));
      
      if (produto_principal.length > 0) {
        //console.log("Maior q");
        for (idx = 0; idx < produto_principal.length; idx++) {
          if(produto_principal[idx].available == true) {
            $('.box-item__select--'+produto_principal[idx].prodId).append('<li value="'+idx+'">'+produto_principal[idx].dimensions+'</li>').show(200);
          }
        }    
      }
      //itens_atuais.prod_1 = obj_principal[0];
      $('.vitrine--custom_loja ul .box-item__select').each(function(){
        var indexAtual = $("li:first", this).attr("value");
        //console.log("indexAtual 1: "+indexAtual);
        itens_atuais.prod_1 = obj_principal[indexAtual];
        $("li:first", this).addClass("active");
      });
      
      setTimeout(function(){
        loja.addClass('complete');
      },1000)
    }
    else {
      loja.remove();
    }
    function teste(array,count) {
      if (count<array.length) {
        $.each(array,function(i,el){
          if(i == count) {
            monta_arr_loja(el,i,array.length)
          }
        })
      }
    }
    
    function monta_arr_loja(obj,index,tamanho) {  
      var temp_obj = [];
      var this_origem = window.location.origin;
      loja.find('.vitrine ul li').eq(index).find('.box-item__select');//.addClass('box-item__select--'+obj);        
      var settings = {
        "url": this_origem+"/api/catalog_system/pub/products/variations/"+obj,
        "method": "GET",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json",
        },
      };
      
      $.ajax(settings).done(function (response) {    
        console.log(response);
        for (var i = 0; i < response.skus.length; i++) {
          //console.log(response.skus[i].dimensions.Tamanho);
          if (response.skus[i].available == true && response.skus[i].dimensions.Tamanho != undefined) {
            $('.vitrine--custom_loja_original').find('.box-item').eq(index).find('.box-item__select').append('<li value="'+i+'">'+response.skus[i].dimensions.Tamanho+'</li>');
          }
          var elem;
          elem = new item_vitrine (
            'x',
            'prod.productId',
            response.skus[i].sku,
            response.skus[i].image,
            response.skus[i].skuname,
            response.skus[i].listPrice,
            response.skus[i].bestPrice,
            response.skus[i].installments,
            response.skus[i].installmentsValue,
            response.skus[i].available,
            response.skus[i].dimensions.Tamanho
            );
          temp_obj.push({prodId: obj, index: i, item:elem})
        }
        produtos_loja.push(temp_obj);
        
        if (index == (tamanho-1)) {                
          controle_produtos.push(obj_principal)
          for (var i = 0; i < produtos_loja.length; i++) {
            controle_produtos.push(produtos_loja[i])            
          }
          setTimeout(adiciona_scroll(),index*(tamanho+100));
          //setTimeout(remonta_tudo(0),100);
          setTimeout(usando_o_select(),index*(tamanho+100));
        }
        count_code++;
        teste(ids_acessorios,count_code);
      });
    }
    function loja_produto_principal(el,i) {
      //console.log(el);
      //console.log("TESTE");
      for (var i = 0; i < el.length; i++) {
        //if (currentSlide == i) {
          //console.log(controle_produtos[(i+1)][0])
          //itens_atuais.prod_2 = controle_produtos[(i+1)][0]
        //}
        obj = el[i].item;
        if (obj.available == true) {
          var $valor_de = '';
          var $vezes = '';
          //console.log("VAlores: "+prod.productId+" e "+obj.sku+" e disp: "+obj.available+" qtd array length: "+el.length);
          if (obj.valor_de > 0) {
            $valor_de = '<span class="prefix  prefix--old-price">De: </span>'+formata_valor_dinheiro(obj.valor_de);
          }
          if(obj.parc_vezes > 1) {
            $vezes = 'Ou <strong>'+obj.parc_vezes+'x</strong> de <span>'+formata_valor_dinheiro(obj.parc_valor)+'</span>';
          }
          
          return '<li>'+
          '<span class="box-item text-center" data-id="'+obj.sku+'">'+
          '<a class="box-item__product-image product-image" title="'+prod.name+'" href="javascript:void(0)">'+
          '<div class="box-item__product-image__cont box-item__product-image__cont--default"><img src="'+obj.img+'" width="292" height="292" alt="'+obj.sku+'"></div>'+
          '</a>'+
          '<b class="box-item__product-name product-name">'+
          '<a title="'+prod.name+'" href="javascript:void(0)">'+prod.name+'</a>'+
          '</b>'+
          '<span class="box-item__price price"> '+
          '<a title="'+prod.name+'" href="javascript:void(0)">'+
          '<span class="box-item__price__old-price old-price">'+$valor_de+'</span>'+
          '<span class="box-item__price__best-price best-price">'+
          '<span class="prefix  prefix--best">Por: </span>'+formata_valor_dinheiro(obj.valor_por)+'</span>'+
          '<span class="box-item__price__installment installment">'+$vezes+'</span>'+
          '</a>'+
          '</span>'+
          '<ul class="box-item__select box-item__select--'+prod.productId+'" style="display: none;"></ul>'+
          '</span>'+
          '</li>';
        }
      }
    }
    function remonta_tudo(index) {
      var b_item = $('.vitrine--custom_loja_original .box-item')
      b_item.each(function(i,el){
        var $this = $(this);
        var item;
        //var item = controle_produtos[(i+1)][index].item;
        $('.vitrine--custom_loja_original ul .box-item__select').each(function(){
          var indexAtual = $("li:first", this).attr("value");
          //console.log("indexAtual 2: "+indexAtual);
          //itens_atuais.prod_2 = controle_produtos[(i+1)][indexAtual]
          item = controle_produtos[(i+1)][indexAtual+1];
        });
        //var item = controle_produtos[(i+1)][index].item;
        console.log("VALROES SEM SELECAO: "+item);
        !!item.valor_de ? $this.find('.box-item__price__old-price').html('<span class="prefix">De: </span>'+formata_valor_dinheiro(item.valor_de)) : ''
        $this.find('.box-item__price__best-price').html('<span class="prefix  prefix--best">Por: </span>'+formata_valor_dinheiro(item.valor_por));
        if (item.parc_vezes>1) {$this.find('.box-item__price__installment').html('Ou <strong>'+item.parc_vezes+'x</strong> de <span>'+formata_valor_dinheiro(item.parc_valor)+'</span>')}
          console.log("item.valor_por: "+item.valor_por);
      });
    }
    function somatoria_valores() {
      var val_1 = itens_atuais.prod_1.item.valor_por;
      var val_2 = itens_atuais.prod_2.item.valor_por;
      var result = formata_valor_dinheiro(val_1+val_2);
      //console.log("SKU 1: "+itens_atuais.prod_1.item.sku+" e SKU 2: "+itens_atuais.prod_2.item.sku);
      //console.log("result: "+val_1+" e "+val_2);
      //console.log("SKUs corretos: "+itens_atuais.prod_1.item.sku+"  e  "+itens_atuais.prod_2.item.sku);
      var buy_link = '/checkout/cart/add?sku='+itens_atuais.prod_1.item.sku+'&qty=1&seller=1&sku='+itens_atuais.prod_2.item.sku+'&qty=1&seller=1&redirect=true&sc=1';
      $('.compre_junto__buy__valor').text(result);
      $('.compre_junto__buy__comprar').attr('href',buy_link);
      $('.compre_junto__buy__title_prod').html(itens_atuais.prod_1.item.nome+" e "+itens_atuais.prod_2.item.nome);
    }
    function adiciona_scroll() {
      var thisScroll = $('.vitrine--custom_loja_original > ul');
      auxiliar();
      function auxiliar (){
        thisScroll.on('init',function(event,slick){
          for (var i = 0; i < produtos_loja.length; i++) {
            if (slick.currentSlide == i) {
              $('.vitrine--custom_loja_original ul .slick-active .box-item__select').each(function(){
                var indexAtual = $("li:first", this).attr("value");
                //console.log("controle_produtos: "+controle_produtos[0]);
                //console.log("indexAtual 2: "+indexAtual);
                itens_atuais.prod_2 = controle_produtos[(i+1)][indexAtual];
              });
            }
          } 
          $('.vitrine--custom_loja_original ul .box-item__select').each(function(){
            $("li:first", this).addClass("active");
          });
          //console.log("quando iniciar");
        });
        
        thisScroll.slick({
          dots: false,
          arrows: true,
          infinite: false,
          fade: true
        });
        thisScroll.on('afterChange',function(event, slick, currentSlide){
          for (var i = 0; i < produtos_loja.length; i++) {
            if (currentSlide == i) {
                //console.log("currentSlide: "+currentSlide);
                //console.log(controle_produtos);
                var indexAtual = $(".vitrine--nova .slick-slide.slick-active .box-item__select li.active").attr("value");
                //console.log("Posicao controle de produtos "+(i+1)+" index atual: "+indexAtual);
                itens_atuais.prod_2 = controle_produtos[(i+1)][indexAtual];
                //console.log("indexAtual 2: "+itens_atuais.prod_2.item.nome+" :"+indexAtual);
              }
            }
          //console.log("quando mudar");
          somatoria_valores();
        });
        thisScroll.parent().before(
          '<div class="compre_junto__signal compre_junto__signal--mais"><span>+</span></div>'
          );
        thisScroll.parent().after(
          '<div class="compre_junto__signal compre_junto__signal--igual"><span>=</span></div>'+
          '<div class="compre_junto__buy">'+
          '<div class="compre_junto__buy__title">Leve os 2 itens por</div>'+
          '<div class="compre_junto__buy__valor">R$ 00,00</div>'+
          '<div class="compre_junto__buy__title_prod"></div>'+
          '<a class="compre_junto__buy__comprar" href="#" style="display:block">Comprar</a>'+
          '<span class="compraSeguraProd">Compra <b>Segura</b></span>'+
          '</div>'
          );
        somatoria_valores();
      }
      
    }
    function usando_o_select () {
      var $select = $('.box-item__select')
      $select.each(function(i,el) {
        var $this = $(this);
        var b_item = $this.closest('.box-item')
        var $opt = $this.find('li');
        if ($opt.length > 1 ) {
          $this.addClass('showMe');
          $opt.click(function(){
            $("li", $this).removeClass("active");
            $(this).addClass("active");
            var $obj = {}
            var item = controle_produtos[i][$(this).attr("value")];
            // console.log(item)
            if (i == 0) {
              itens_atuais.prod_1 = item;
            } else {
              itens_atuais.prod_2 = item;
            }
            b_item.find('.box-item__product-image__cont > img').attr('src',item.item.img);
            !!item.valor_de ? b_item.find('.box-item__price__old-price').html('<span class="prefix">De: </span>'+formata_valor_dinheiro(item.item.valor_de)) : '';
            b_item.find('.box-item__price__best-price').html('<span class="prefix  prefix--best">Por: </span>'+formata_valor_dinheiro(item.item.valor_por));
            if (item.item.parc_vezes>1) {
              b_item.find('.box-item__price__installment').html('Ou <strong>'+item.item.parc_vezes+'x</strong> de <span>'+formata_valor_dinheiro(item.item.parc_valor)+'</span>');
            } else {
              b_item.find('.box-item__price__installment').html('');
            }
            somatoria_valores();
          })
        }
        else {
          $this.hide();
        }
      });
    }
    function item_vitrine(link, prodId, sku, img, nome, valor_de, valor_por, parc_vezes, parc_valor, available, dimensions) {
      this.link = link;
      this.prodId = prodId;
      this.sku = sku;
      this.img = img;
      this.nome = nome;
      this.valor_de = valor_de;
      this.valor_por = valor_por;
      this.parc_vezes = parc_vezes;
      this.parc_valor = parc_valor;
      this.available = available;
      this.dimensions = dimensions;
    }
  },
  miniCart: function() {
    $(".cart-total-value > div.text-left").prepend("<p class='discount'></p>");
    //$(".cart-link").click(function(e){
      jQuery(document).on("click", ".cart-link", function (e) {
        e.preventDefault();
        $(".card.card-default, .mini-cart-overlay").addClass("active");
      });
      jQuery(document).on("click", ".closeCart", function (e) {
        $(".card.card-default, .mini-cart-overlay").removeClass("active");
      });
      jQuery(document).on("click", ".mini-cart-overlay", function (e) {
        $(".closeCart").trigger("click");
      });
      jQuery(document).on("click", ".continuar-comprando", function (e) {
        $(".closeCart").trigger("click");
      });
      jQuery(document).on("click", ".cart-add", function (e) {
        var num = parseInt($(this).prev(".cart-qtd").html());
        var position = $(this).parent().attr("data-position");
        if(num >= 1) {
          $(".cart-total-value > div.text-right").addClass("loading");
          num = num + 1;
        //console.log("num "+num+" posição: "+position);
        $(this).siblings(".cart-qtd").html(num);
        setTimeout(function(){
          vtexjs.checkout.getOrderForm().then(function(orderForm) {
            //var novoNum = orderForm.items[position].quantity;
            var itemIndex = position;
            var item = orderForm.items[itemIndex];
            var updateItem = {
              index: itemIndex,
              quantity: num
            };
            return vtexjs.checkout.updateItems([updateItem]);
          }).done(function(orderForm) {
            callLady.updateMiniCart(orderForm);
            $(".cart-total-value > div.text-right").removeClass("loading");
          });
        }, 200);
      }
    });
      jQuery(document).on("click", ".cart-remove", function (e) {
        var num = parseInt($(this).next(".cart-qtd").html());
        var position = $(this).parent().attr("data-position");
        if(num > 1) {
          $(".cart-total-value > div.text-right").addClass("loading");
          num = num - 1;
        //console.log("num "+num+" ~posição: "+position);
        $(this).siblings(".cart-qtd").html(num);
        setTimeout(function(){
          //var $that = $(this);
          vtexjs.checkout.getOrderForm().then(function(orderForm) {
            //var novoNum = orderForm.items[position].quantity;
            var itemIndex = position;
            var item = orderForm.items[itemIndex];
            var updateItem = {
              index: itemIndex,
              quantity: num
            };
            return vtexjs.checkout.updateItems([updateItem], null, false);
          }).done(function(orderForm) {
            callLady.updateMiniCart(orderForm);
            $(".cart-total-value > div.text-right").removeClass("loading");
          });
        }, 500);
      }
    });
      jQuery(document).on("click", ".removerProduto", function (e) {
        var $that = $(this);
        $(".cart-total-value > div.text-right").addClass("loading");
        vtexjs.checkout.getOrderForm().then(function(orderForm) {
          var itemIndex = $($that).attr("data-position");
          var item = orderForm.items[itemIndex];
          var itemsToRemove = [
          {
            "index": itemIndex
              //"quantity": 0,
            }
            ]
            return vtexjs.checkout.removeItems(itemsToRemove);
          }).done(function(orderForm) {
            callLady.updateMiniCart(orderForm);
            $(".cart-total-value > div.text-right").removeClass("loading");
          //scriptsCall.miniCart();
        });
        });
    // atualiza minicart quando a pagina é chamada
    vtexjs.checkout.getOrderForm().done(function(orderForm) {
      callLady.updateMiniCart(orderForm);
    });
  },
  updateMiniCart: function(orderForm) {
    //calculando total de itens
    var qtd = orderForm.items.length;
    var i; 
    var total = 0;
    for (i = 0; i < qtd; i++) { 
      total = total + orderForm.items[i].quantity;
    }
    $(".cart-link > span").html(total);
    //construindo minicart
    $(".card-products-wrapper").html("");
    var qtd = orderForm.items.length;
    // console.log(orderForm);
    if(qtd > 0) {
      var i;
      for (i = 0; i < qtd; i++) { 
        var foto = orderForm.items[i].imageUrl;
        foto = foto.replace("-55-55", "-120-120")
        var marca = orderForm.items[i].additionalInfo.brandName;
        var nome = orderForm.items[i].name;
        //var dimension = orderForm.items[i].refId;
        //dimension = dimension.substr(dimension.length - 3).split('_').pop().trim();
        var precoDe = parseFloat(Math.round(orderForm.items[i].listPrice) / 100).toFixed(2);
        var precoPor = parseFloat(Math.round(orderForm.items[i].price) / 100).toFixed(2);
        var quantidade = orderForm.items[i].quantity;
        //console.log(i+" "+marca+" "+nome+" "+precoDe+" "+precoPor);
        if(precoDe == precoPor) {
          $(".card-products-wrapper").append('<productcart><div class="media"><span class="removerProduto" data-position="'+i+'">excluir</span><div class="media-left"><img alt="'+nome+'" src="'+foto+'" /></div><div class="media-body text-left"><h3>'+marca+'</h3><p class="name">'+nome+'<span></span></p><p class="price red"><span class="price02 colorGray">'+precoPor+'</span></p><p class="quantidade" data-position="'+i+'"><span class="cart-remove"></span><span class="cart-qtd">'+quantidade+'</span><span class="cart-add"></span></p></div></div></productcart>');
        } else {
          $(".card-products-wrapper").append('<productcart><div class="media"><span class="removerProduto" data-position="'+i+'">excluir</span><span></span><div class="media-left"><img alt="'+nome+'" src="'+foto+'" /></div><div class="media-body text-left"><h3>'+marca+'</h3><p class="name">'+nome+'<span></span></p><p class="price red"><span class="price01">'+precoDe+'</span><span class="price02">'+precoPor+'</span></p><p class="quantidade" data-position="'+i+'"><span class="cart-remove"></span><span class="cart-qtd">'+quantidade+'</span><span class="cart-add"></span></p></div></div></productcart>');
        }
      }
      subtotal = parseFloat(Math.round(orderForm.totalizers[0].value) / 100).toFixed(2);
      subtotal = subtotal.replace(",", "-").replace(".", ",").replace("-", ".");
      //descontos = parseFloat(Math.round(orderForm.totalizers[1].value) / 100).toFixed(2);
      //descontos = descontos.replace(",", "*").replace(".", ",").replace("*", ".").replace("-", "");
      //console.log(descontos);
      $(".card-default .subtotal").html("<p><span class='full'>"+subtotal+"</span></p>");
      $(".cart-total-value > div.text-left p.discount").html("");
      //console.log("VALOR: "+subtotal);
      if(orderForm.totalizers[1]) {
        descontos = orderForm.totalizers[1].id;
        if(descontos == "Discounts") {
          subtotalCount = orderForm.totalizers[0].value + orderForm.totalizers[1].value;
          subtotalCount = parseFloat(Math.round(subtotalCount) / 100).toFixed(2);
          subtotalCount = subtotalCount.replace(",", "-").replace(".", ",").replace("-", ".");
          discountCount = parseFloat(Math.round(orderForm.totalizers[1].value) / 100).toFixed(2);
          $(".card-default .subtotal").html("<p><span class='discount'>"+discountCount+"</span><span class='full'>"+subtotalCount+"</span></p>");
          $(".cart-total-value > div.text-left p.discount").html("Desconto");
          //console.log("VALOR: "+subtotal);
        } 
      } 
      /*else {
        $(".card-default .subtotal").html("<p><span class='full'>"+subtotal+"</span></p>");
        $(".cart-total-value > div.text-left p.discount").html("");
        console.log("VALOR: "+subtotal);
      }*/
      
    } else {
      $(".cart-panel").addClass("empty");
      $(".card.card-default > h2").html("Sua sacola está vazia");
      $(".cart-total-value > div.text-right").html("");
    }  
  },
  buyProduct: function() {
    $(".skuList label").click(function(){
      setTimeout(function(){ 
        //show buy button
        if($(".sku-notifyme").attr("style") == "display: block;") {
          $(".alertProd").html("");
        } else {
          $(".alertProd").html("");
        }
      }, 200);
    });
    $(".buy-button").before("<p class='alertProd'></p>");
    var idProd = $("#___rc-p-id").attr("value");
    jQuery(document).on("click", ".buy-button", function (event) {
      event.preventDefault();
      var polCom;
      var hrefCart = $(".buy-button").attr("href");
      var message = "javascript:alert('Por favor, selecione o modelo desejado.');";
      var resUTL = hrefCart.split("sku=").pop().split("&qty=").shift();
        //var qtd = $(".showValue").val();
        //var qtd = 1;
        if(hrefCart == message){
          $(".alertProd").html("<span>Selecione uma opção acima</span>");
          $(".alertProd span").addClass("anima");
          setTimeout(function() {
            $(".alertProd span").removeClass("anima");
          }, 2000);
          var posicao = $(".seletorSku");
          $('html,body').animate({scrollTop: posicao.offset().top-30},'slow');
            //$(".produto_modal").addClass("active");
          } else {
            $(".alertProd").html("");
            $(".buy-button").addClass("loading");
          //window.location = $(".buy-button").attr("href");
          setTimeout(function(){ 
            vtexjs.checkout.getOrderForm().then(function(){
              item = {
                id: resUTL,
                quantity: 1,
                seller: 1
              };
              vtexjs.checkout.addToCart([item], null, 1).done(function(orderForm){
                callLady.updateMiniCart(orderForm);                   
                $(".card.card-default").addClass("active").removeClass("empty");
                $(".mini-cart-overlay").addClass("active");
                $(".card.card-default > h2").html("Produto adicionado!");
                $('.card-products-wrapper').scrollTop($('.card-products-wrapper')[0].scrollHeight);
                $(".card-products-wrapper .media:last").addClass("success");
                setTimeout(function(){
                  $(".buy-button").removeClass("loading");
                  $(".card.card-default, .mini-cart-overlay").removeClass("active");
                  $(".card.card-default > h2").html("Minha Sacola");
                  $(".card-products-wrapper .media").removeClass("success");
                }, 6000);
              });
            });
            vtexjs.checkout.getOrderForm().then(function(orderForm) {
              var marketingData = orderForm.marketingData;
              var valores = getCookie('IPS');
              valores = valores+"&";
              console.log("valores: "+valores);
                //var varParceiro = valores.split('Parceiro=').pop().split('&')[0]; //source
                //var varMidia = valores.split('Midia=').pop().split('&')[0]; //medium
                //var varCampanha = valores.split('Campanha=').pop().split('&')[0]; //campaign
                //console.log("Parceiro: "+varParceiro);
                //console.log("Midia: "+varMidia);
                //console.log("Campanha: "+varCampanha);
                marketingData = {
                  utmSource: valores.split('Parceiro=').pop().split('&')[0],
                  utmMedium: valores.split('Midia=').pop().split('&')[0],
                  utmCampaign: valores.split('Campanha=').pop().split('&')[0]
                };
                return vtexjs.checkout.sendAttachment("marketingData", marketingData);
              }).done(function(orderForm) {
                console.log("adicinando campanhas de mkt");
                console.log(orderForm);
              });
            }, 2000);
        }
        
      });
  },
  tabelaDeMedidas: function() {
    $("#tabMedidas").before('<div class="modal-backdrop fade out"></div>');
    $("li.specification").after('<a data-toggle="modal" href="#tabMedidas" class="linkTab">Guia de Tamanhos</a>')
   // $(".linkTab").click(function(){
    jQuery(document).on("click", ".linkTab", function (e) {
      $(".modal-backdrop.fade").removeClass('out').addClass("in");
      $("#tabMedidas").addClass("show");
    });
    jQuery(document).on("click", ".tabModal .close", function (e) {
      $(".modal-backdrop.fade").removeClass('in').addClass("out");
      $("#tabMedidas").removeClass("show");
    });
    jQuery(document).on("click", "#tabMedidas", function (e) {
      if (!$(event.target).closest(".tabModal").length) {
        $(".modal-backdrop.fade").removeClass('in').addClass("out");
        $("#tabMedidas").removeClass("show");
      }
    });
    if($("#medidasMain table").length){
      $(".linkTab").addClass("show");
    }
  },
  modalParcelamento: function() {
    $("#tabPagamento").before('<div class="modal-backdrop fade out"></div>');
    //$("li.specification").after('<a data-toggle="modal" href="#tabMedidas" class="linkTab">Guia de Tamanhos</a>')
    // $(".linkTab").click(function(){
      jQuery(document).on("click", ".linkParcelamento", function (e) {
        $(".modal-backdrop.fade").removeClass('out').addClass("in");
        $("#tabPagamento").addClass("show");
      });
      jQuery(document).on("click", ".tabModalParcelamento .close", function (e) {
        $(".modal-backdrop.fade").removeClass('in').addClass("out");
        $("#tabPagamento").removeClass("show");
      });
      jQuery(document).on("click", "#tabPagamento", function (e) {
        if (!$(event.target).closest(".tabModalParcelamento").length) {
          $(".modal-backdrop.fade").removeClass('in').addClass("out");
          $("#tabPagamento").removeClass("show");
        }
      });
    /*if($("#medidasMain table").length){
      $(".linkParcelamento").addClass("show");
    }*/
  },
  customProduct: function() {
    $(".prateleira02 > h1").after("<div class='prateleiraColTitles'></div>")
    $(".prateleira02 > .shelf").each(function (i) {
      var title = $("> h2", this).html();
      $(this).parent().children(".prateleiraColTitles").append("<span class='prateleiraColTitle0" + (i + 1) + "'>" + title + "</span>");
      $(this).addClass("prateleiraCol010"+(i + 1));
    });
    $(".prateleiraCol0101").css("display", "block");
    $(".prateleiraColTitle01").addClass("active");
    jQuery(document).on("click", ".prateleiraColTitles > span", function () {
      numero = $(this).attr("class");
      numero = numero.slice(-1);
      console.log(numero);
      $(".prateleiraColTitles > span").removeClass("active");
      $(this).addClass("active");
      $(".prateleira02 > .shelf").hide();
      $(".prateleiraCol010"+numero).fadeIn();
      $(".prateleiraCol010"+numero+"> ul").slick("setPosition");
    });
    /*jQuery(document).on("click", ".prateleira02 .prateleiraColTitle01", function () {
        $(".prateleira02 .prateleiraColTitles > span").removeClass("active");
        $(this).addClass("active");
        $(".prateleiraCol0102, .prateleiraCol0103").hide();
        $(".prateleiraCol0101").fadeIn();
        $(".prateleiraCol0101 > .shelf > ul").slick("setPosition");
    });
    jQuery(document).on("click", ".prateleira02 .prateleiraColTitle02", function () {
        $(".prateleira02 .prateleiraColTitles > span").removeClass("active");
        $(this).addClass("active");
        $(".prateleiraCol0101, .prateleiraCol0103").hide();
        $(".prateleiraCol0102").fadeIn();
        $(".prateleiraCol0102 > .shelf > ul").slick("setPosition");
    });
    jQuery(document).on("click", ".prateleira02 .prateleiraColTitle03", function () {
        $(".prateleira02 .prateleiraColTitles > span").removeClass("active");
        $(this).addClass("active");
        $(".prateleiraCol0101, .prateleiraCol0102").hide();
        $(".prateleiraCol0103").fadeIn();
        $(".prateleiraCol0103 > .shelf > ul").slick("setPosition");
      });*/
    },
    enviarFormularioRevendedor: function() {
      $(".telefone").mask("(99) 9999-9999?9");
      $(".celular").mask("(99) 9999-9999?9");
      $(".enviar-form").click(function(){
        var varNone = $(".nome").val();
        var varEmail = $(".email").val();
        var varRazao = $(".razaosocial").val();
        var varCPF = $(".cpfcnpj").val();
        var varEndereco = $(".endereco").val();
        var varNumero = $(".numeroendereco").val();
        var varTelefone = $(".telefone").val();
        var varCelular = $(".celular").val();
        var varObs = $(".observacao").val();
        var varFantasia = $(".fantasia").val();
        var varNoneAux = $(".nome");
        var varEmailAux = $(".email");
        var varRazaoAux = $(".razaosocial");
        var varCPFAux = $(".cpfcnpj");
        var varEnderecoAux = $(".endereco");
        var varTelefoneAux = $(".telefone");
        var varCelularAux = $(".celular");
        var varObsAux = $(".observacao");
        var varFantasiaAux = $(".fantasia");
        //var varAssinaAux = $(".assinanews");
        
        $(".box-form input.required, .box-form textarea.required").removeClass("required");
        if(varRazao == ''){
          $(".newsError").remove();
          varRazaoAux.before("<label class='error newsError'>Preencha o campo Razão Social</label>");
          varRazaoAux.addClass("required");
        } else if(varFantasia == ''){
          $(".newsError").remove();
          varFantasiaAux.before("<label class='error newsError'>Preencha o campo Nome Fantasia</label>");
          varFantasiaAux.addClass("required");
        } else if(varCPF == ''){
          $(".newsError").remove();
          varCPFAux.before("<label class='error newsError'>Preencha o campo CPF/CNPJ</label>");
          varCPFAux.addClass("required");
        } else if(varEmail == ''){
          $(".newsError").remove();
          varEmailAux.before("<label class='error newsError'>Preencha o campo e-mail</label>");
          varEmailAux.addClass("required");
        } else if(varNone == ''){
          $(".newsError").remove();
          varNoneAux.before("<label class='error newsError'>Preencha o campo Nome</label>");
          varNoneAux.addClass("required");
        } else if(varTelefone == ''){
          $(".newsError").remove();
          varTelefoneAux.before("<label class='error newsError'>Preencha o campo Telefone Comercial</label>");
          varTelefoneAux.addClass("required");
        } else if(varCelular == ''){
          $(".newsError").remove();
          varCelularAux.before("<label class='error newsError'>Preencha o campo Telefone Celular</label>");
          varCelularAux.addClass("required");
        } else if(varEndereco == ''){
          $(".newsError").remove();
          varEnderecoAux.before("<label class='error newsError'>Preencha o campo Endereço Completo</label>");
          varEnderecoAux.addClass("required");
        } else if(varEmail != ''){
          // tudo certo
          validate();
        }
        function validate(){
          if (validateEmail(varEmail)) {
          //getFromMasterData('BV', 'email='+varE, 'email');
          enviaDados();
        } else {
          // preencha um e-mail válido
          $(".newsError").remove();
          varEmailAux.before("<label class='error newsError'>Preencha um e-mail válido</label>");
          varEmailAux.addClass("required");
        }
        return false;
      }
      function enviaDados(){
        var datos = {};
        datos.nome = varNone;
        datos.email = varEmail;
        datos.razaosocial = varRazao;
        datos.cpfcnpj = varCPF;
        datos.endereco = varEndereco;
        datos.telefone = varTelefone;
        datos.celular = varCelular;
        datos.observacao = varObs;
        datos.fantasia = varFantasia;
        $.ajax({
          accept: 'application/vnd.vtex.ds.v10+json',
          contentType: 'application/json; charset=utf-8',
          crossDomain: true,
          data: JSON.stringify(datos),
          type: 'POST',
          url: '/api/dataentities/RV/documents',
          success: function(data) {
            $(".form-contact").html("<p class='sucesso'>Mensagem enviada com sucesso. <br />Em breve retornaremos o contato.</p>");
            console.log("Sucesso!");
          },
          error: function(error){
            console.log(error);
          }
        });
      }
    });
},
init: function(){
    //Geral
    callLady.mobPage();
    callLady.removeComplement();
    callLady.mobileMenu();
    callLady.miniCart();
    callLady.menuPrincipal();
    //callLady.sliderDescricoes(".fx-left");
    callLady.flagPreco();
    callLady.wrapSearch();
    callLady.wrapBtMiniCart();
    callLady.backToTop();
    callLady.showLogin();
    callLady.customBuyShelf();
    callLady.enviarNewsletter();
    if (body.hasClass('lady-home')) {
      callLady.sliderBanners(".banner-principal > div");
      callLady.sliderProducts(".prateleira01 .shelf > ul, .prateleira02 .shelf > ul, .prateleira03 .shelf > ul");
      callLady.sliderCategoriasBar(".escolha-tamanho > ul");
      callLady.sliderTamanhos(".catalogo-digital > .container-center");
      callLady.customProduct();
      callLady.instaFeed();
    }
    if (body.hasClass('lady-category')) {
     callLady.customElements();
     callLady.orderCustom();
     callLady.categoryFiltros();
     callLady.categoryFiltrosMob();
       //callLady.infinityScroll();
     }
     if (body.hasClass('lady-produto')) {
      callLady.reconheceMobile();
      callLady.fixBreadcrumb();
      callLady.slideToggleDescription();
      callLady.imagensDoProduto();
      //callLady.buyButton();
      callLady.buyProduct();
      callLady.discountPercentage();
      //callLady.tabelaDeMedidas();
      callLady.modalParcelamento();
      callLady.fixFrete();
      callLady.sliderProducts(".shelf > ul");
      callLady.desconto_preco_a_vista();
    } 
    if (body.hasClass('lady-inst')) {
      callLady.menuInstMobile();
    } 
    if (body.hasClass('lady-busca-vazia')) {
      callLady.sliderProducts(".shelf > ul");
    } 
    if (body.hasClass('fale-com')) {
      callLady.enviarFormularioContato();
    } 
    if (body.hasClass('revendedor')) {
      callLady.enviarFormularioRevendedor();
    } 
    if (body.hasClass('lojas')) {
      callLady.filtroLojas();
    }
    
  }
}
$(document).ready(function() {
  callLady.init();
});
//Funções
Number.prototype.formatMoney = function(c, d, t){
  var n = this, c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "," : d, t = t == undefined ? "." : t, s = n < 0 ? "-" : "", i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;
  return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};
function validateEmail(puEmail) {     
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(puEmail);
}
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
$.fn.unslick = function() {
  var _ = this;
  return _.each(function(index, element) {
    if (element.slick) {
      element.slick.destroy();
    }
  });
};
function formata_valor_dinheiro(e) {
  return e = "R$ " + (.01 * e).toFixed(2).replace(".", ","), e
}
function limpa_valor_dinheiro(e) {
  var a = parseInt(e.replace(/R\$|\.|\,/g, "").trim());
  return a
}
function getCampanha(name) {
  if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(location.search))
    return decodeURIComponent(name[1]);
}
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}