
import React from 'react';

export const SYSTEM_PROMPT = `你是一位精通 MATLAB 的车牌识别 (LPR) 专家。
你的任务是分析提供的图像（图像可能受雾天干扰），并模拟专业去雾识别管线的输出。
1. 识别车牌号码（如：京A88888）。
2. 识别车辆或车牌颜色。
3. 提供置信度评分 (0-1)。
4. 以严格的 JSON 格式返回数据。

如果图像因雾气太重无法看清，请基于你内部通过暗原色先验 (DCP) 逻辑计算出的“去雾”版本提供最佳推测结果。`;

export const DCP_MATH_STEPS = [
  {
    title: "暗原色估计",
    formula: "J^{dark}(x) = \\min_{y \\in \\Omega(x)} (\\min_{c \\in \\{r,g,b\\}} J^c(y))",
    desc: "在局部窗口内计算所有颜色通道中的最小强度，提取出图像的暗原色特征。"
  },
  {
    title: "大气光成分估计",
    formula: "A = \\text{max}(I(x)) \\text{ where } x \\in \\text{top 0.1% of } J^{dark}",
    desc: "在暗原色图中选取亮度最高的前 0.1% 像素，以此推断全局大气光强度 A。"
  },
  {
    title: "透射率图精修",
    formula: "t(x) = 1 - \\omega \\min_c \\left( \\frac{I^c(x)}{A^c} \\right)",
    desc: "估算光线穿透雾气的比例，通常配合引导滤波 (Guided Filter) 进行边缘保持和精修。"
  }
];
