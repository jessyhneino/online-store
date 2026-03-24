import React, { useRef } from "react"; // 1. أضفنا useRef
import { Download, CreditCard, Package, CheckCircle2 } from "lucide-react";
import html2canvas from "html2canvas"; // 2. استيراد المكتبات
import jsPDF from "jspdf";

const Invoice = () => {
  const invoiceRef = useRef(); // 3. مرجع لعنصر الفاتورة

  const data = {
    orderId: "ORD-7742",
    date: "October 24, 2024",
    customer: {
      name: "Julian Thorne",
      address: "842 Madison Avenue, Suite 12",
      city: "New York, NY 10021",
      country: "United States",
      email: "julian.thorne@curator.com",
    },
    items: [
      {
        id: 1,
        name: "Structured Wool Coat",
        variant: "Charcoal / Large",
        quantity: 1,
        price: 1250.0,
        image:
          "https://oscarjacobson.centracdn.net/client/dynamic/images/6561_Oscar-Jacobson_Regular-Fit-Double-Breasted-Wool-Coat_Black_72131669_310_List2-full.jpg",
      },
      {
        id: 2,
        name: "Essential White Sneaker",
        variant: "Vellum / 42",
        quantity: 1,
        price: 380.0,
        image:
          "https://thursdayboots.com/cdn/shop/files/1024x1024-Court-White-040324-3.4_7f15fec3-6e8d-4678-844e-53bf8648dac7_1024x1024.jpg?v=1721774143",
      },
      {
        id: 3,
        name: "Titanium Dial Watch",
        variant: "Ref. 774-A",
        quantity: 1,
        price: 2100.0,
        image:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1024",
      },
    ],
    subtotal: 3730.0,
    tax: 298.4,
    total: 4028.4,
    transactionId: "tx_988273645521",
  };

  // 4. دالة تحميل الـ PDF
  const downloadPDF = async () => {
    const element = invoiceRef.current;
    // التقاط صورة للعنصر مع دعم الصور الخارجية (useCORS)
    const canvas = await html2canvas(element, {
      scale: 2, // جودة عالية
      useCORS: true,
      logging: false,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`Invoice-${data.orderId}.pdf`);
  };
  const handleDownloadPDF = async () => {
    const element = invoiceRef.current;
    if (!element) {
      console.error("المجسم غير موجود!");
      return;
    }

    try {
      console.log("بدء عملية التحويل...");

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true, // مهم جداً للصور الخارجية
        allowTaint: true,
        logging: true, // لكي نرى الأخطاء في Console المتصفح
        backgroundColor: "#ffffff",
      });

      console.log("تم التقاط الصورة بنجاح");

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Invoice-${data.orderId}.pdf`);

      console.log("تم تحميل الملف!");
    } catch (error) {
      console.error("فشلت العملية:", error);
      alert(
        "حدث خطأ أثناء تحميل الملف، تأكد من اتصال الإنترنت أو راجع الـ Console"
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans text-slate-900">
      <div className="max-w-4xl mx-auto">
        {/* Actions Bar */}
        <div className="flex justify-between items-center mb-8 print:hidden">
          <div className="flex items-center gap-2">
            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
              <CheckCircle2 size={16} /> PAID
            </span>
          </div>
          {/* تغيير الـ onClick لنداء الدالة الجديدة */}
          <button
            onClick={handleDownloadPDF}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-blue-200"
          >
            <Download size={18} /> Download PDF
          </button>
        </div>

        {/* 5. إضافة ref لهذا القسم ليتم تصويره */}
        <div
          ref={invoiceRef}
          className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100"
        >
          {/* Header */}
          <div className="p-8 sm:p-12 border-b border-slate-50">
            <div className="flex flex-col sm:flex-row justify-between gap-6">
              <div>
                <h1 className="text-4xl font-light tracking-tight text-slate-900 mb-2">
                  Invoice
                </h1>
                <div className="flex items-center gap-3 text-slate-500">
                  <span className="font-mono text-sm">#{data.orderId}</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span className="text-sm">{data.date}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600 italic">
                  CURATOR.
                </div>
              </div>
            </div>
          </div>

          {/* ... باقي الكود كما هو بدون تغيير ... */}
          <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-50/50">
            {/* Billing & Shipping sections... */}
            <div className="p-8 sm:p-12 border-b md:border-b-0 md:border-r border-slate-100">
              <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-4">
                Billing To
              </p>
              <h3 className="text-lg font-semibold mb-2">
                {data.customer.name}
              </h3>
              <div className="text-slate-500 leading-relaxed text-sm">
                <p>{data.customer.address}</p>
                <p>{data.customer.city}</p>
                <p>{data.customer.country}</p>
                <p className="mt-2 text-blue-600 font-medium">
                  {data.customer.email}
                </p>
              </div>
            </div>
            <div className="p-8 sm:p-12">
              <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-4">
                Shipping To
              </p>
              <h3 className="text-lg font-semibold mb-2">
                {data.customer.name}
              </h3>
              <div className="text-slate-500 leading-relaxed text-sm">
                <p>{data.customer.address}</p>
                <p>{data.customer.city}</p>
                <p className="mb-4">{data.customer.country}</p>
                <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium">
                  <Package size={14} className="text-slate-400" /> Premium
                  Express Delivery
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-12">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-slate-100">
                  <th className="pb-4 text-[10px] uppercase tracking-widest font-bold text-slate-400">
                    Item
                  </th>
                  <th className="pb-4 text-[10px] uppercase tracking-widest font-bold text-slate-400 text-center">
                    Qty
                  </th>
                  <th className="pb-4 text-[10px] uppercase tracking-widest font-bold text-slate-400 text-right">
                    Price
                  </th>
                  <th className="pb-4 text-[10px] uppercase tracking-widest font-bold text-slate-400 text-right">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {data.items.map((item) => (
                  <tr key={item.id}>
                    <td className="py-6">
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          crossOrigin="anonymous"
                          alt={item.name}
                          className="w-16 h-16 rounded-2xl object-cover"
                        />
                        <div>
                          <p className="font-semibold text-slate-800">
                            {item.name}
                          </p>
                          <p className="text-xs text-slate-400 mt-0.5">
                            {item.variant}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-6 text-center font-mono text-sm text-slate-600">
                      0{item.quantity}
                    </td>
                    <td className="py-6 text-right font-mono text-sm text-slate-600">
                      ${item.price.toLocaleString()}
                    </td>
                    <td className="py-6 text-right font-semibold text-slate-900">
                      ${(item.quantity * item.price).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-8 flex justify-end">
              <div className="w-full sm:w-64 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Subtotal</span>
                  <span className="font-mono text-slate-900">
                    ${data.subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Tax (8%)</span>
                  <span className="font-mono text-slate-900">
                    ${data.tax.toLocaleString()}
                  </span>
                </div>
                <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-lg font-bold text-slate-900">
                    Total
                  </span>
                  <span className="text-2xl font-black text-blue-600">
                    ${data.total.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-slate-50/50 border-t border-slate-100">
            <div className="flex justify-between items-center text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CreditCard size={14} /> ID: {data.transactionId}
              </div>
              <p>Thank you for choosing Curator Studio.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
