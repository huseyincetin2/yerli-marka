const source = [
  {
    logo: "https://assets.turbologo.com/blog/en/2020/02/19084627/7up-cover.jpg",
    text: "7up",
  },
  {
    logo: "https://www.nestle.com/sites/default/files/styles/thumbnail/public/acqua-panna-logo-round.png",
    text: "Acqua Panna",
  },
  {
    logo: "https://www.nestle.com/sites/default/files/styles/thumbnail/public/asset-library/publishingimages/brands/chocolate-confectionery/aero-logo-round.png",
    text: "Aero",
  },
  {
    logo: "https://brandlogos.net/wp-content/uploads/2022/05/aesop-logo_brandlogos.net_pedrx.png",
    text: "Aesop",
  },
  {
    logo: "https://www.bookingholdings.com/wp-content/uploads/2019/10/bkng_brands-fullyopen-agoda-1.svg",
    text: "Agoda",
  },
  {
    logo: "https://www.luxurylabcosmetics.it/wp-content/uploads/2019/06/logos-HP_ahava.jpg",
    text: "Ahava",
  },
  {
    logo: "https://s.yimg.com/uu/api/res/1.2/Bz8iDlw16Zf6PVc.y33xdg--~B/aD0zOTA7dz02MTA7YXBwaWQ9eXRhY2h5b24-/http://globalfinance.zenfs.com/Finance/US_AHTTP_ENTREPRENEUR_H_NEW_LIVE/1405612741-airbnb-why-new-logo_original.jpg",
    text: "Airbnb",
  },
  {
    logo: "https://images.ctfassets.net/aqfuj2z95p5p/6wCF01XuXegMHkkBZ3hao3/7943e9f78c73c7cc28d8b9bccf329fce/Always_EN_UK_Homepage_Always-logo-OG.jpg",
    text: "Always",
  },
  {
    logo: "https://i.pinimg.com/564x/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
    text: "Amazon",
  },
  {
    logo: "https://logonoid.com/images/ambi-pur-logo.jpg",
    text: "Ambipur",
  },
  {
    logo: "https://logowik.com/content/uploads/images/american-eagle-outfitters7114.jpg",
    text: "American Eagle",
  },
  {
    logo: "https://www.loveamika.co.uk/c-images/fb-image.png",
    text: "Amika",
  },
  {
    logo: "https://www.coca-colacompany.com/content/dam/company/us/en/brands/logos/appletiser-logo.png",
    text: "Appletiser",
  },
  {
    logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/072017/untitled-4_4.png",
    text: "Aquafina",
  },
  {
    logo: "https://www.coca-colacompany.com/content/dam/company/us/en/brands/logos/aquarius-logo.png",
    text: "Aquarius",
  },
  {
    logo: "https://static.wikia.nocookie.net/logopedia/images/2/29/Ariel_logo_2006.png",
    text: "Ariel",
  },
  {
    logo: "https://images.ctfassets.net/zyvr84rwvj68/34O3XfqFR60G6mcU6mooyq/d599d420ba23eedf3751029bce22ff43/Aussie.jpg",
    text: "Aussie",
  },
  {
    logo: "https://i0.wp.com/fourteenten.com/wp-content/uploads/2017/03/AVIVA-Client-Logo-Image.png",
    text: "Aviva",
  },
  {
    logo: "https://www.tabletalkmedia.co.uk/wp-content/uploads/2015/03/axa.png",
    text: "AXA",
  },
  {
    logo: "https://cdn.sanity.io/images/92ui5egz/production/b953900d039e64d54e396b500343f64065fe3f62-280x280.jpg?w=375&h=375&fit=crop&auto=format",
    text: "Axe",
  },
  {
    logo: "https://rocketandcloud.co.uk/wp-content/uploads/2022/02/bae-logo-6-1-550x360.png",
    text: "BAE Systems",
  },
  {
    logo: "https://icons.veryicon.com/png/o/business/bank-logo-collection/bank-of-america-logo.png",
    text: "Bank of America",
  },
  {
    logo: "https://bayviewleasidebia.com/wp-content/uploads/2022/08/BMO.png",
    text: "Bank of Montreal",
  },
  {
    logo: "https://www.openbanking.org.uk/wp-content/uploads/2021/04/Barclays-Bank-logo.png",
    text: "Barclays",
  },
  {
    logo: "https://i.pinimg.com/originals/b1/df/c2/b1dfc2670f0ba2913a3aaca3b12630ae.jpg",
    text: "Bath & Body Works",
  },
  {
    logo: "https://cdn.sanity.io/images/92ui5egz/production/bdfd6b3653902d668fa8fa5c430ab63be1676271-280x280.png?w=375&h=375&fit=crop&auto=format",
    text: "Ben & Jerry's",
  },
  {
    logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0000/0889/brand.gif",
    text: "BIOTHERM",
  },
  {
    logo: "https://www.fintechfutures.com/files/2017/04/BNP-Paribas.png",
    text: "BNP Paribas",
  },
  {
    logo: "https://yt3.googleusercontent.com/ytc/APkrFKYxzT0Ta2tKaKQmlN707g61WXokGqJK1oaGZHFmVw=s900-c-k-c0x00ffffff-no-rj",
    text: "Bobbi Brown",
  },
  {
    logo: "https://marvel-b1-cdn.bc0a.com/f00000000163918/www.care.org/wp-content/uploads/2021/10/Boeing.png",
    text: "Boeing",
  },
  {
    logo: "https://images.ctfassets.net/zyvr84rwvj68/6LLHcCt51Sc0m0s4SigqAE/dd76765a1e15c755772c625f9c171fe0/Bold-2in1.jpg",
    text: "Bold",
  },
  {
    logo: "https://www.bookingholdings.com/wp-content/uploads/2020/11/bkng_brands-fullyopen-booking.com_-1.svg",
    text: "Booking.com",
  },
  {
    logo: "https://images.easyfundraising.org.uk/retailer/cropped/logo-braun-household-uk-1685708000.jpg",
    text: "Braun",
  },
  {
    logo: "https://i.pinimg.com/474x/7f/c8/da/7fc8da6228e191ea00825ce5f374e565.jpg",
    text: "Bulgari / Bvlgari",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Burger_King_logo_%281994%29.svg/2111px-Burger_King_logo_%281994%29.svg.png",
    text: "Burger King",
  },
  {
    logo: "https://www.nestle.com/sites/default/files/styles/thumbnail/public/buxton-logo-round.png",
    text: "Buxton",
  },
  {
    logo: "https://www.capitalone.co.uk/cloud_assets/png/capital-one-logo.png",
    text: "Capital One",
  },
  {
    logo: "https://www.nestle.com/sites/default/files/styles/thumbnail/public/asset-library/publishingimages/brands/dairy/carnation-logo-round.png",
    text: "Carnation",
  },
  {
    logo: "https://logowik.com/content/uploads/images/210_carrefour.jpg",
    text: "Carrefour",
  },
  {
    logo: "https://s3.eu-west-2.amazonaws.com/img.creativepool.com/files/candidate/portfolio/full/857631.jpg",
    text: "Carte D'Or Ice Creams",
  },
  {
    logo: "https://1000logos.net/wp-content/uploads/2016/11/Colors-of-the-caterpillar-logo.jpg",
    text: "Caterpillar",
  },
  {
    logo: "https://fashionista.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU4MTczNTkyNjAzODYyMzEz/hedi-slimane-celine-new-logo.jpg",
    text: "Celine",
  },
  {
    logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102013/chanel_black.png",
    text: "Chanel",
  },
  {
    logo: "https://www.cheapflights.co.uk/news/wp-content/uploads/sites/138/2020/03/default-post-thumbnail-1640x1312.png",
    text: "Cheapflights",
  },
  {
    logo: "https://www.nestle.com/sites/default/files/styles/thumbnail/public/cereals-cheerios-logo.png",
    text: "Cheerios",
  },
  {
    logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0010/0838/brand.gif",
    text: "Cheetos",
  },
  {
    logo: "https://cdn.sanity.io/images/92ui5egz/production/5b3550003de32697bef8264cca1e4e222dab891e-1920x1080.jpg?rect=420,0,1080,1080&w=375&h=375&fit=crop&auto=format",
    text: "Cif",
    country: "Fransa",
  },
  {
    logo: "https://i.pinimg.com/280x280_RS/e5/76/34/e5763410888540ccff2a9f8d4c18dacc.jpg",
    text: "Clear Blue",
  },
  {
    logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0001/5427/brand.gif?Gt6PPdgJuur6AEtnU2Im_sunXs3XuZbo&itok=o_eLBdUe",
    text: "Clinique",
  },
  {
    logo: "https://www.coca-colacompany.com/content/dam/company/us/en/brands/logos/coca-cola-logo.png",
    text: "Coca-Cola",
  },
  {
    logo: "https://www.nestle.com/sites/default/files/styles/thumbnail/public/coffee-mate-logo-round_7.png",
    text: "Coffee Mate",
  },
  {
    logo: "https://cdn.sanity.io/images/92ui5egz/production/a8c2ae9b3e2c4dae8c7223a81b8dd49f98cfd266-1080x1080.png?w=375&h=375&fit=crop&auto=format",
    text: "Comfort",
  },
  {
    logo: "https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/ik2bctvydwmkecjghspk",
    text: "Conservative party",
  },
  {
    logo: "https://cdn.sanity.io/images/92ui5egz/production/911b7828e3d316d99652c1e2792bea6e70fbf5df-1080x1080.png?w=375&h=375&fit=crop&auto=format",
    text: "Cornetto Ice Creams",
  },
  {
    logo: "https://www.coca-colacompany.com/content/dam/company/us/en/brands/logos/costa-logo.png",
    text: "Costa Coffee",
  },
  {
    logo: "https://adlai-partners.com/wp-content/uploads/curver_logo.jpg",
    text: "Curver",
  },
  {
    logo: "https://www.coca-colacompany.com/content/dam/company/us/en/brands/logos/dasani-logo.png",
    text: "Dasani Water",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg",
    text: "Dell",
  },
  {
    logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0012/4528/brand.gif",
    text: "Diesel Frangrances",
  },
  {
    logo: "https://www.coca-colacompany.com/content/dam/company/us/en/brands/logos/dietCoke_transparency.png",
    text: "Diet Coke",
  },
  {
    logo: "https://dynl.mktgcdn.com/p/KfI5g-nDtylqhtl1RdhWzG0DMJ7sGl0lGfr3EARlPtQ/500x500.jpg",
    text: "Dior / Christian Dior",
  },
  {
    logo: "https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/02/Disney-Plus-logo-920x518.jpg",
    text: "Disney",
  },
  {
    logo: "https://cdn.freebiesupply.com/logos/thumbs/2x/dkny-2-logo.png",
    text: "DKNY",
  },
  {
    logo: "https://cdn.sanity.io/images/92ui5egz/production/9c1c07e7e468bc88ebf369dce27e46fb8134b330-1080x1080.jpg?w=375&h=375&fit=crop&auto=format",
    text: "Domestos",
  },
  {
    logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0019/5529/brand.gif",
    text: "Doritos",
  },
  {
    logo: "https://cdn.sanity.io/images/92ui5egz/production/db75ae243befa00aa3cdb2eaf546b0c3aa2ab5d2-1080x1080.jpg?w=375&h=375&fit=crop&auto=format",
    text: "Dove",
  },
  {
    logo: "https://www.coca-cola.com/content/dam/onexp/gb/en/logos/v2/uk_dr_pepper_logo_286x180.png",
    text: "Dr Pepper",
  },
  {
    logo: "https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1469615776/asjzj7thdsrcofxhgz3l.png",
    text: "Eden Springs",
  },
  {
    logo: "https://static.stocktitan.net/company-logo/ESLT-lg.png",
    text: "Elbit Systems",
  },
  {
    logo: "https://logowik.com/content/uploads/images/550_estee_lauder.jpg",
    text: "Estee Lauder",
  },
  {
    logo: "https://berkgida.com/wp-content/uploads/2021/02/ofixfairylogo.jpg",
    text: "Fairy",
  },
  {
    logo: "https://www.coca-colacompany.com/content/dam/company/us/en/brands/logos/fanta-logo.png",
    text: "Fanta",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/72/Febreze_Logo.svg",
    text: "Febreze",
  },
  {
    logo: "https://www.nestle.com/sites/default/files/styles/thumbnail/public/felix-logo-square-2023.png",
    text: "Felix",
  },
  {
    logo: "https://i.pinimg.com/originals/c4/6a/bc/c46abcf81b48d73f67a371033f2a8699.png",
    text: "Fendi",
  },
  {
    logo: "https://seeklogo.com/images/F/fenty-logo-C76A749839-seeklogo.com.png",
    text: "Fenty Beauty by Rihanna",
  },
  {
    logo: "https://mms.businesswire.com/media/20230510006090/en/827135/22/Fiverr_September_2020_Logo.jpg",
    text: "Fiverr",
  },
  {
    logo: "https://www.infologue.com/wp-content/uploads/2021/08/G4S-Logo.png",
    text: "G4S",
  },
  {
    logo: "https://media.giphy.com/avatars/MTNDEWGAMEFUEL/igP0vcVwmx8u.png",
    text: "Game Fuel",
  },
  {
    logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/072019/garnier_logo.jpg?Hc_rMssrG43ZcRMFKa6QdUcGRKyr5oP8&itok=TPiNcSQp",
    text: "Garnier",
  },
  {
    logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0019/1244/brand.gif",
    text: "Gatorade",
  },
  {
    logo: "https://i.pinimg.com/736x/20/47/b8/2047b8ff614a863dba63d27a54a0a1fb.jpg",
    text: "Gillette",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTihVZ6h9Are1xzGGeBlltY1uVSlkblolMzowx4AV7hEXFYMawBy7krb_Ut0Tm7w8RfgNw&usqp=CAU",
    text: "Giorgio Armani Beauty",
  },
  {
    logo: "https://i.pinimg.com/originals/3d/a0/35/3da0354353d0d7dc17f95af8ebc3efb8.png",
    text: "Givenchy",
  },
  {
    logo: "https://www.coca-colacompany.com/content/dam/company/us/en/brands/logos/smartwater-logo.png",
    text: "Glaceau Smartwater",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png",
    text: "Google",
  },
  {
    logo: "https://logowik.com/content/uploads/images/head-shoulders7079.jpg",
    text: "Head and Shoulders",
  },
  {
    logo: "https://cdn.sanity.io/images/92ui5egz/production/8fe76fd805ab71155fd402e9a90e584e36231910-1080x1080.png?w=375&h=375&fit=crop&auto=format",
    text: "Hellman's",
  },
  {
    logo: "https://crueltyfree.peta.org/wp-content/uploads/herbal-essences-scaled.jpg",
    text: "Herbal Essences",
  },
  {
    logo: "data:image/png;base64,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",
    text: "HP",
  },
  {
    logo: "https://www.hsbc.co.uk/etc.clientlibs/dpws/clientlibs-public/clientlib-site/resources/social/logo/Square-1200x1200px.jpg",
    text: "HSBC",
  },
  {
    logo: "https://seeklogo.com/images/H/Hublot-logo-A48632AE5F-seeklogo.com.png",
    text: "Hublot",
  },
  {
    logo: "https://pbs.twimg.com/profile_images/821433960639008768/_M06NaeP_400x400.jpg",
    text: "Hyundai",
  },
  {
    logo: "https://www.coca-colacompany.com/content/dam/company/us/en/brands/logos/innocent-logo.png",
    text: "Innocent Smoothies",
  },
  {
    logo: "https://crueltyfree.peta.org/wp-content/uploads/it-cosmetics-logo.jpg",
    text: "IT Cosmetics",
  },
  {
    logo: "https://image.isu.pub/170203184809-3d22cddc0d5e27dd1d0ea2ce32b57baf/jpg/page_1.jpg",
    text: "Jo Malone",
  },
  {
    logo: "https://www.bookingholdings.com/wp-content/uploads/2018/02/bkng_brands-fullyopen-kayak-1.svg",
    text: "Kayak",
  },
  {
    logo: "https://logowik.com/content/uploads/images/kenzo8232.jpg",
    text: "Kenzo",
  },
  {
    logo: "https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1469080356/d4wxa85xv4gueo1nwled.png",
    text: "Keter",
  },
  {
    logo: "https://banner2.cleanpng.com/20180601/xyv/kisspng-colonel-sanders-kfc-dallas-crispy-fried-chicken-kfc-5b112003073f25.1634110215278489630297.jpg",
    text: "KFC",
  },
  {
    logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0023/3652/brand.gif",
    text: "Kiehl's",
  },
  {
    logo: "https://www.nestle.com/sites/default/files/styles/thumbnail/public/kitkat-logo-square-2023.png",
    text: "KitKat",
  },
  {
    logo: "https://cdn.sanity.io/images/92ui5egz/production/e1b2dfa5598c94587747a2e58c588a8a0eb35580-1080x1080.jpg?w=375&h=375&fit=crop&auto=format",
    text: "Knorr",
  },
  {
    logo: "https://miro.medium.com/v2/resize:fit:1000/1*gSiQUzv3VJq8DVtMiwX93Q.jpeg",
    text: "Kylie Cosmetics",
  },
  {
    logo: "https://fontmeme.com/images/Lar-Mer-Logo.jpg",
    text: "La Mer",
  },
  {
    logo: "https://ih1.redbubble.net/image.977949166.6470/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
    text: "Labour party",
  },
  {
    logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/032011/untitled-1_392.png",
    text: "Lancome",
  },
  {
    logo: "https://i.pinimg.com/originals/08/15/b3/0815b39bbb315d4aaf50b260de14a653.jpg",
    text: "Lay's",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/L%26G_Logo_4C_2023.png",
    text: "Legal & General",
  },
  {
    logo: "https://www.pattersons.co.uk/media/solwin/ourbrand/brand/image/l/e/lenor.jpg",
    text: "Lenor",
  },
  {
    logo: "https://www.nestle.com/sites/default/files/styles/thumbnail/public/cereals-lion-logo.png",
    text: "Lion",
  },
  {
    logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/012023/lipton.png?fbRyRvf2gy6O8JQcQhfxkr8O.CxRGBk.&itok=uZ6IQzoY",
    text: "Lipton",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/en/f/fc/LIPTON_PRIMARY_RGB_BMT.png",
    text: "Lipton Iced Tea",
  },
  {
    logo: "https://www.lloydsbankinggroup.com/assets/images/site-wide/logos/png/lloyds-bank-300.png",
    text: "Lloyds Bank",
  },
  {
    logo: "https://pbs.twimg.com/profile_images/1635287976044548108/tNkqLQPN_400x400.png",
    text: "Lockheed Martin",
  },
  {
    logo: "https://logowik.com/content/uploads/images/loewe2671.jpg",
    text: "Loewe",
  },
  {
    logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0000/2125/brand.gif",
    text: "Loreal / L'oreal",
  },
  {
    logo: "https://media.designrush.com/inspiration_images/136124/conversions/_1519762849_545_990__1513771354_519_louis-v1_b31600c58738-mobile.jpg",
    text: "Louis Vuitton",
  },
  {
    logo: "https://r.lvmh-static.com/uploads/2010/01/lvmh_logotype_simple_n-1.jpg",
    text: "LVMH",
  },
  {
    logo: "https://cdn.sanity.io/images/92ui5egz/production/2f8428952599e230782f70a2ca0bfc3e5fa2b270-1080x1080.png?w=375&h=375&fit=crop&auto=format",
    text: "Lux",
  },
  {
    logo: "https://cdn.sanity.io/images/92ui5egz/production/81a3d4dbeb4e81c5c5443bd3616e23b6333428d4-1080x1080.png?w=375&h=375&fit=crop&auto=format",
    text: "Lynx",
  },
  {
    logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/122019/logo-mac_prancheta_1.png?NPZfS4QSWg_6ySGSJKInsSXz2CFRKvhS&itok=2_JpKro7",
    text: "MAC Cosmetics",
  },
  {
    logo: "https://www.nestle.com/sites/default/files/styles/thumbnail/public/maggi-logo-round-2022.png",
    text: "Maggi",
  },
  {
    logo: "https://cdn.sanity.io/images/92ui5egz/production/26b76dc0a16aa60339c059b31babcb45a6d1409a-1080x1080.jpg?w=375&h=375&fit=crop&auto=format",
    text: "Magnum Ice Creams",
  },
  {
    logo: "https://perfumesociety.org/wp-content/uploads/2014/04/FRANCIS-KURK-1.jpg",
    text: "Maison Francis Kurkdjian",
  },
  {
    logo: "https://admin.showstudio.com/images/qJ-C79aRXkFj725FPJYdSkL5QgU=/376561/width-640%7Cformat-jpeg/f92ad3f3434f7a20ca931285c2df9906.png",
    text: "Maison Margiela Fragrances",
  },
  {
    logo: "https://i.pinimg.com/originals/5d/fe/db/5dfedbb30f0bc5803283b79a4c9da8fd.jpg",
    text: "Marc Jacobs",
  },
  {
    logo: "https://corporate.marksandspencer.com/sites/marksandspencer/files/styles/desktop/public/marksandspencer/logos/m-s-logo.png",
    text: "Marks and Spencer / M&S",
  },
  {
    logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0003/5632/brand.gif",
    text: "Maybelline",
  },
  {
    logo: "https://pbs.twimg.com/profile_images/1572161199751454721/P5ubky0o_400x400.jpg",
    text: "MBDA",
  },
  {
    logo: "https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo-500x281.png",
    text: "McDonalds",
  },
  {
    logo: "https://www.graduatesfirst.com/wp-content/uploads/2023/07/mercedes-benz-logo-7500641.png",
    text: "Mercedes Benz",
  },
  {
    logo: "https://www.nestle.com/sites/default/files/styles/thumbnail/public/asset-library/publishingimages/brands/chocolate-confectionery/milkybar-logo-round.png",
    text: "Milkybar",
  },
  {
    logo: "https://ceblog.s3.amazonaws.com/wp-content/uploads/2020/11/13182233/Monday-Logo-1.png",
    text: "Monday.com",
  },
  {
    logo: "https://s3-symbol-logo.tradingview.com/mondelez--600.png",
    text: "Mondelez",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtmGGog03Rp28l-WS8xL5iCUJakSfX14s_qdxOuOkJ&s",
    text: "Moovit",
  },
  {
    logo: "https://cdn.supadupa.me/shop/13/images/1908639/morrocan-oil-logo-gravity-_grande.png",
    text: "MoroccanOil",
  },
  {
    logo: "https://cdn.lovesavingsgroup.com/logos/motorola.jpg",
    text: "Motorola",
  },
  {
    logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0009/3885/brand.gif",
    text: "Mountain Dew",
  },
  {
    logo: "https://www.nestle.com/sites/default/files/styles/thumbnail/public/movenpick-logo-round-2021.png",
    text: "Movenpick",
  },
  {
    logo: "https://notwanepharmacy.store/wp-content/uploads/2020/08/mugler-logo.png",
    text: "Mugler Beauty",
  },
  {
    logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0018/1433/brand.gif",
    text: "Naked Juice",
  },
  {
    logo: "https://www.nestle.com/sites/default/files/styles/thumbnail/public/nescafe-logo-square.png",
    text: "Nescafe",
  },
  {
    logo: "https://www.nestle.com/sites/default/files/styles/thumbnail/public/nespresso-logo-round-2.png",
    text: "Nespresso",
  },
  {
    logo: "https://www.nestle.com/sites/default/files/styles/thumbnail/public/nesquik-logo-round-2021.png",
    text: "Nesquik",
  },
  {
    logo: "https://bsykurumsal.com/wp-content/uploads/2021/09/nestle-logo-bsy-300x159.png",
    text: "Nestle",
  },
  {
    logo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/01-nvidia-logo-vert-500x200-2c50-l@2x.png",
    text: "Nvidia",
  },
  {
    logo: "https://lens-storage.storage.googleapis.com/png/74504afc12b6483d988c46d13fa2f6ca",
    text: "NYX Professional Makeup",
  },
  {
    logo: "https://www.tabletalkmedia.co.uk/wp-content/uploads/2015/11/Oasis-Logo.png",
    text: "Oasis",
  },
  {
    logo: "https://1000logos.net/wp-content/uploads/2021/04/Olay-logo.png",
    text: "Olay",
  },
  {
    logo: "https://1000logos.net/wp-content/uploads/2020/04/Logo-Old-Spice1.jpg",
    text: "Old Spice",
  },
  {
    logo: "https://www.bookingholdings.com/wp-content/uploads/2018/02/bkng_brands-fullyopen-opentable.svg",
    text: "Opentable",
  },
  {
    logo: "https://cdn.freebiesupply.com/logos/large/2x/oracle-1-logo-png-transparent.png",
    text: "Oracle",
  },
  {
    logo: "https://shop.oralb.co.uk/c-images/fb-image.png",
    text: "Oral B",
  },
  {
    logo: "https://opinionstage-res.cloudinary.com/images/f_auto,q_auto/v1641219211/Case-studies-outbrain-/Case-studies-outbrain-.jpg",
    text: "Outbrain",
  },
  {
    logo: "https://seeklogo.com/images/P/pampers-logo-D613293CC6-seeklogo.com.png",
    text: "Pampers",
  },
  {
    logo: "https://logowik.com/content/uploads/images/865_pantene.jpg",
    text: "Pantene",
  },
  {
    logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0021/0128/brand.gif",
    text: "Pepsi",
  },
  {
    logo: "https://www.nestle.com/sites/default/files/styles/thumbnail/public/perrier-logo-round-green.png",
    text: "Perrier",
  },
  {
    logo: "https://cdn.sanity.io/images/92ui5egz/production/49f021024dbc823ce3fd71bac47d5627f560d333-1080x1080.jpg?w=375&h=375&fit=crop&auto=format",
    text: "Persil",
  },
  {
    logo: "https://logowik.com/content/uploads/images/130_pizzahut.jpg",
    text: "Pizza Hut",
  },
  {
    logo: "https://restaurantpropertysellers.com/wp-content/uploads/2021/11/popeyes-london-reviews.png",
    text: "Popeyes",
  },
  {
    logo: "https://media.home.bargains/brand-images/3/6/9/0/36907459caf36331f385a4772a62ee468006af37.png?x=200",
    text: "Power Action",
  },
  {
    logo: "https://www.coca-colacompany.com/content/dam/company/us/en/brands/logos/powerade-logo.png",
    text: "Powerade",
  },
  {
    logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102010/prada-original.png",
    text: "Prada Beauty",
  },
  {
    logo: "https://www.bookingholdings.com/wp-content/uploads/2018/05/brands-fullyopen-priceline.svg",
    text: "Priceline",
  },
  {
    logo: "https://logowik.com/content/uploads/images/108_procterandgamble.jpg",
    text: "Procter & Gamble",
  },
  {
    logo: "https://staticg.sportskeeda.com/editor/2023/03/bda84-16779522739911-1920.jpg",
    text: "Puma",
  },
  {
    logo: "https://www.nestle.com/sites/default/files/styles/thumbnail/public/pure-life-logo-square.png",
    text: "Nestle Pure Life",
  },
  {
    logo: "https://www.nestle.com/sites/default/files/styles/thumbnail/public/purina-logo-square-2023.png",
    text: "Purina",
  },
  {
    logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/082012/quakeroats.jpg",
    text: "Quaker Oats",
  },
  {
    logo: "https://www.nestle.com/sites/default/files/styles/thumbnail/public/qs-logo-round.png",
    text: "Quality Street",
  },
  {
    logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0003/0211/brand.gif",
    text: "Ralph Lauren Frangrances",
  },
  {
    logo: "https://i.redd.it/dbnb0o1q6ci81.png",
    text: "Raytheon",
  },
  {
    logo: "https://www.princessroyaltrainingawards.com/wp-content/uploads/2017/08/Logos-510x288-RBS.jpg",
    text: "RBS",
  },
  {
    logo: "https://www.bookingholdings.com/wp-content/uploads/2018/02/bkng_brands-fullyopen-rentalcars.com_.svg",
    text: "Rentalcars.com",
  },
  {
    logo: "https://cdn.sanity.io/images/92ui5egz/production/d806c6c7edf6271cb15478eae7c34485f4f35d41-1080x1080.jpg?w=375&h=375&fit=crop&auto=format",
    text: "Rexona",
  },
  {
    logo: "https://eu-images.contentstack.com/v3/assets/blt781c383a1983f673/bltd2ce17abcde2167e/621c9c6327606b7ce81a315e/riverisland.png",
    text: "River Island",
  },
  {
    logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0025/2387/brand.gif",
    text: "Rockstar Energy",
  },
  {
    logo: "https://www.nestle.com/sites/default/files/styles/thumbnail/public/asset-library/publishingimages/brands/bottled-water/spellegrino-logo-round.png",
    text: "S.Pellegrino",
  },
  {
    logo: "https://pbs.twimg.com/profile_images/1383060096251351050/Ip84a103_400x400.png",
    text: "Sabra",
  },
  {
    logo: "https://www.coca-colacompany.com/content/dam/company/us/en/brands/logos/schweppes-logo.png",
    text: "Schweppes",
  },
  {
    logo: "https://logosandtypes.com/wp-content/uploads/2020/08/Scotiabank.png",
    text: "Scotia Bank",
  },
  {
    logo: "https://static.wikia.nocookie.net/logopedia/images/2/24/Seven_Seas_%28vitamins%29_1.png",
    text: "Seven Seas",
  },
  {
    logo: "https://www.nestle.com/sites/default/files/styles/thumbnail/public/cereals-shredded-wheat-logo.png",
    text: "Shredded Wheat",
  },
  {
    logo: "https://www.nestle.com/sites/default/files/styles/thumbnail/public/cereals-shreddies-logo.png",
    text: "Shreddies",
  },
  {
    logo: "https://www.nestle.com/sites/default/files/styles/thumbnail/public/smarties-logo-round-2022.png",
    text: "Smarties",
  },
  {
    logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/092012/soda_stream.png",
    text: "SodaStream",
  },
  {
    logo: "https://www.coca-colacompany.com/content/dam/company/us/en/brands/logos/sprite-logo.png",
    text: "Sprite",
  },
  {
    logo: "https://www.lincs-chamber.co.uk/wp-content/uploads/2018/02/Standard-Life-Assurance-logo.png",
    text: "Standard Life",
  },
  {
    logo: "https://www.tailorbrands.com/wp-content/uploads/2020/11/starbucks-logo-2011.jpg",
    text: "Starbucks",
  },
  {
    logo: "https://r.lvmh-static.com/uploads/2022/08/stella-logo.png",
    text: "STELLA by Stella McCartney",
  },
  {
    logo: "https://www.chemist.net/pub/media/brand/sudocrem_bd37.jpg",
    text: "Sudocrem",
  },
  {
    logo: "https://cdn.sanity.io/images/92ui5egz/production/e80729857a4e391984df4473831a0cce25271b02-280x280.jpg?w=375&h=375&fit=crop&auto=format",
    text: "Surf",
  },
  {
    logo: "https://www.proggio.com/wp-content/uploads/2019/01/feat-Taboola.png",
    text: "Taboola",
  },
  {
    logo: "https://www.hatchwise.com/wp-content/uploads/2023/01/image-25.png",
    text: "Taco Bell",
  },
  {
    logo: "https://i.pinimg.com/originals/50/5f/1d/505f1dc613cff29078ccb445708b7b33.png",
    text: "TAG Heuer",
  },
  {
    logo: "https://logowik.com/content/uploads/images/tampax3061.jpg",
    text: "Tampax",
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/ted-baker.svg",
    text: "Ted Baker",
  },
  {
    logo: "https://www.etoro.com/wp-content/uploads/2018/05/eToro-share-img.png",
    text: "eToro",
  },
  {
    logo: "https://assets.website-files.com/622733c59bf20d8a074764f6/622733c59bf20dbdf4476887_Tesco.png",
    text: "Tesco",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Teva_Pharmaceuticals_logo.png/2560px-Teva_Pharmaceuticals_logo.png",
    text: "Teva Pharmaceuticals",
  },
  {
    logo: "https://clearvisioneyecare.ca/wp-content/uploads/2017/03/Tiffany-Co-logo.jpg",
    text: "Tiffany & Co.",
  },
  {
    logo: "https://fiu-original.b-cdn.net/fontsinuse.com/use-images/168/168197/168197.png?filename=Tim_Hortons_Maple_Leaf.png",
    text: "Tim Hortons",
  },
  {
    logo: "https://media.licdn.com/dms/image/D4E0BAQH9tPiLt38cxA/company-logo_200_200/0/1695305566079?e=2147483647&v=beta&t=er2z4E0XEEsougatDEiiqIlaKhIJ4JnbpT2yTPKZqbM",
    text: "Tom Ford Beauty",
  },
  {
    logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0017/4978/brand.gif",
    text: "Tropicana",
  },
  {
    logo: "https://cdn.sanity.io/images/92ui5egz/production/7c1c60e9afaaaa3cce61e5101717796d21b7f914-1426x1080.svg?rect=0,141,1426,799&w=150&h=84&fit=crop&auto=format",
    text: "Unilever",
  },
  {
    logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/012012/ud.png",
    text: "Urban Decay",
  },
  {
    logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0002/2916/brand.gif",
    text: "Valentino Beauty",
  },
  {
    logo: "https://m.media-amazon.com/images/S/aplus-media/vc/df9fce60-bbdd-47a9-9971-8f79194b46cc._CR0,0,300,300_PT0_SX300__.jpg",
    text: "Venus",
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/124/124016.png",
    text: "Viber",
  },
  {
    logo: "https://images.ctfassets.net/xuuihvmvy6c9/5R9Uu2Vwa9vtDltACu79Tt/cabf9fbffcc32f7aae7b16088a1030fd/p-1994-XXL_2x.png",
    text: "Vicks",
  },
  {
    logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/042017/untitled-2_15.png",
    text: "Victorias Secret",
  },
  {
    logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/062010/VR_logo.gif",
    text: "Viktor & Rolf Beauty",
  },
  {
    logo: "https://www.nestle.com/sites/default/files/styles/thumbnail/public/vittel-logo-round.png",
    text: "Vittel",
  },
  {
    logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052018/untitled-4_19.png?Nrpk5Y1UlrEvEEOMK6vQRsPrg_u.VN8O&itok=wHARdQlD",
    text: "Volvo",
  },
  {
    logo: "https://www.walkers.co.uk/assets/img/walkers__logo.png",
    text: "Walker's",
  },
  {
    logo: "https://cdn.sanity.io/images/92ui5egz/production/88537a9efbbd962b3ff2f063af7b7b6985c146bc-1080x1080.png?w=375&h=375&fit=crop&auto=format",
    text: "Walls Ice Creams",
  },
  {
    logo: "https://media.designrush.com/inspiration_images/345908/conversions/walmart_1-preview.jpg",
    text: "Walmart",
  },
  {
    logo: "https://9to5google.com/2020/06/29/waze-logo-2020-brand-refresh/waze-logo-2020-1/",
    text: "Waze",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Wells_Fargo_Logo_%282020%29.svg/800px-Wells_Fargo_Logo_%282020%29.svg.png",
    text: "Wells Fargo",
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968762.png",
    text: "Wix",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Yum%21_Brands_logo.svg/1200px-Yum%21_Brands_logo.svg.png",
    text: "Yum Foods",
  },
  {
    logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102014/logo_cassandre-ysl.png",
    text: "Yves Saint Laurent Beauty",
  },
  {
    logo: "https://www.coca-cola.com/content/dam/onexp/tr/tr/damla/elazig-kaynagimiz/tr_damla_logo_180x180.png",
    text: "Damla Su",
  },
  {
    logo: "https://files.sikayetvar.com/lg/cmp/51/51867.png?1522650125",
    text: "İpana Diş macunu",
  },
  {
    logo: "https://www.omo.com/images/h0nadbhvm6m4/2UP1dC1d9a7YPyCbQFq1nA/366da257cf93ccdf367bedde905e60c6/T01PLWxvZ28tVFIuanBn/160w-97h/omo-logosu.avif",
    text: "Omo Deterjan",
    country: "Hollanda",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/tr/3/3d/Ace-logo.png",
    text: "Ace Deterjan",
    country: "ABD",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/23/Finish_logo.jpg",
    text: "Finish Deterjan",
    country: "ABD",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Pril-Logo.svg",
    text: "Pril",
    country: "Almanya",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/tr/8/8f/Perwoll-logo.png?20180327060230",
    text: "Perwoll",
    country: "Almanya",
  },
  {
    logo: "http://ozmumcu.com.tr/wp-content/uploads/2017/05/vernel.jpg",
    text: "Vernel",
    country: "Almanya",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY-PVtXDhiag7Wma1mkewlf74ua6ckbkv5KPZMsNuEB2ij8c8SSeGrYXe4izBbMjbYcHQ&usqp=CAU",
    text: "Prima",
    country: "Almanya",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/tr/7/7d/Calgon_RB_logo.png?20180328062018",
    text: "Calgon",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Dalin_logo.png",
    text: "Dalin",
    isNative: true,
  },
  {
    logo: "https://www.abcdeterjan.com.tr/wp-content/uploads/logo.png",
    text: "ABC Deterjan",
    isNative: true,
  },
  {
    logo: "https://img-kahvedunyasi.mncdn.com/kahvedunyasi/static/img/logo.svg",
    text: "Kahve Dünyası",
    isNative: true,
  },
  {
    logo: "https://mado.com.tr/wp-content/uploads/2022/08/Mado-Logo.png",
    text: "Mado",
    isNative: true,
  },
  {
    logo: "https://ideacdn.net/idea/jc/45/themes/selftpl_615bfaae409c1/assets/uploads/logo.png",
    text: "Boron",
    isNative: true,
  },
  {
    logo: "https://torku.com.tr/css/images/main-logo.png",
    text: "Torku",
    isNative: true,
  },
  {
    logo: "https://www.tat.com.tr/images/tatGaleri/tat-logo_1.png",
    text: "Tat",
    isNative: true,
  },
  {
    logo: "https://bingo.com.tr/wp-content/themes/bingo/image/bingo_logo2.png",
    text: "Bingo",
    isNative: true,
  },
  {
    logo: "https://market.babyturco.com.tr/Themes/Default/Content/images/logo.png",
    text: "Baby Turco",
    isNative: true,
  },
  {
    logo: "https://www.buzdagisu.com.tr/Content/images/buzdagi@2x.png",
    text: "Buzdağı su",
    isNative: true,
  },
  {
    logo: "https://www.fuska.com.tr/Content/svg/fuska.svg",
    text: "Fuska su",
    isNative: true,
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRk_Pr5sxEoy-EbQG8Ys1WB1ry-ho9VyuIBBFH6ChKR9r4pS9HMA8tJp5yXEZF5JcIXQg&usqp=CAU",
    text: "Eti",
    isNative: true,
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/%C3%9Clker_logo_%282%29.svg/300px-%C3%9Clker_logo_%282%29.svg.png",
    text: "Ülker",
    isNative: true,
  },
  {
    logo: "https://bkm.com.tr/wp-content/uploads/2015/10/Troy-Logo-01.jpg",
    text: "Troy Ödeme Sistemi",
    isNative: true,
  },
];

export default source;
