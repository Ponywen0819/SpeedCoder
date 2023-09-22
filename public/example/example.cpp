void EngineExplorer::listEngines()
{
    m_engines->clear();
    KPluginInfo::List engines = m_engineManager->listDataEngineInfo(m_app);
    qSort(engines);

    foreach (const KPluginInfo engine, engines) {
        m_engines->addItem(QIcon::fromTheme(engine.icon()), engine.pluginName());
    }

    m_engines->setCurrentIndex(-1);
}
